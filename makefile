include .env

SSH_KEY := $(patsubst ~/%,$(HOME)/%,$(PRIVATE_KEY_PATH))

install:
	pnpm install
dev:
	pnpm dev
build:
	pnpm build
# publish:
# 	ssh -i ${PRIVATE_KEY_PATH} pi 'cd ${REMOTE_PI_PATH} && git pull'
docker-up:
	docker compose up -d
docker-rebuild:
	docker compose up -d --build
docker-build:
	docker compose build
docker-down:
	docker compose down

publish: build
	rsync -az --delete --exclude='.env*' -e "ssh -p ${DEPLOY_PORT} -i $(SSH_KEY)" .output/ ${DEPLOY_USER}@${DEPLOY_IP}:${DEPLOY_PATH}/
	scp -P ${DEPLOY_PORT} -i $(SSH_KEY) package.json pnpm-lock.yaml Dockerfile ${DEPLOY_USER}@${DEPLOY_IP}:${DEPLOY_PATH}/
	ssh -p ${DEPLOY_PORT} -i $(SSH_KEY) ${DEPLOY_USER}@${DEPLOY_IP} 'cd ~/cromsites && make d-rebuild-xpto'