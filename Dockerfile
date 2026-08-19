FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable

# Copy package files to install production dependencies
COPY package.json pnpm-lock.yaml ./
# Install ONLY production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the application into the image
COPY --chown=node:node . .

# Create a non-root user and switch to it for security
USER node

# The port your app runs on (adjust if needed)
EXPOSE 3000

# Start the server (defined in package.json)
CMD ["pnpm", "start"]