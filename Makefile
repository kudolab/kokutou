.PHONY: docker-compose/build docker-compose/down docker-compose/logs docker-compose/up

docker-compose/build:
	docker-compose build

docker-compose/up:
	docker-compose up -d

docker-compose/down:
	docker-compose down

docker-compose/logs:
	docker-compose logs -f




# OpenAPI

OPENAPI_GEN=docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:v5.1.0

openapi_generate: clean_openapi
	$(OPENAPI_GEN) generate -i /local/backend/kokuotu/openapi.yaml -g python-flask -o /local/backend/kokutou/openapi

clean_openapi:
	-rm -r ${PWD}/backend/kokutou/openapi/openapi_server

openapi_validate:
	$(OPENAPI_GEN) validate -i /local/reference/kokutou.yaml --recommend