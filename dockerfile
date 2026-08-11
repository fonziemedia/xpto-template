# Stage 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable

# Avoid interactive prompts in Docker/CI
ENV CI=true

# Copy dependency files and install everything (including dev dependencies)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the source code and build the application
COPY . .
# TanStack Start needs environment variables at build time to "bake" them into the client-side JS
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
RUN pnpm build

# Stage 2: Runner (Production)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable

# Copy package files to install production dependencies
COPY package.json pnpm-lock.yaml ./
# Install ONLY production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the built application from the builder stage
COPY --from=builder --chown=node:node /app/.output ./.output

# Create a non-root user and switch to it for security
USER node

# The port your app runs on (adjust if needed)
EXPOSE 3000

# Start the server (defined in package.json)
CMD ["pnpm", "start"]