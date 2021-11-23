.PHONY: dev build, start, lint prettier serve shell deploy logs

dev: lint prettier
	npm run dev
build: lint prettier
	npm run build
start:
	npm run start
lint:
	npm run lint
prettier:
	npm run prettier
serve: lint prettier
	npm run serve
shell:
	npm run shell
deploy: build
	npm run deploy
logs:
	npm run logs
