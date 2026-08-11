# include .env.development

install:
	pnpm install
dev:
	pnpm dev
build:
	pnpm build
# publish:
# 	ssh -i ${PRIVATE_KEY_PATH} pi 'cd ${REMOTE_PI_PATH} && git pull'
docker-up:
	docker-compose up -d
docker-up-build:
	docker-compose up -d --build
docker-build:
	docker-compose build
docker-down:
	docker-compose down