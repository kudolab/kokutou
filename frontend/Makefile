OPENAPI_GENERATOR_VERSION=3.2.3

.PHONY: help gen

help:
	@echo cat Makefile

gen: gen/swagger

gen/swagger:
	npx openapi-typescript@$(OPENAPI_GENERATOR_VERSION) ../swagger/swagger.yaml --output ./pages/api/Schema.ts --immutable-types

setup:
	yarn install

clean:
	-rm -rf dist

.env.local:
	cp .env.example .env.local

#build: ENVIRONMENT=development
#build: VITE_OPTS=
#build:
#	npx vite build $(VITE_OPTS) -m $(ENVIRONMENT)
#
#build/development: VITE_OPTS=--sourcemap
#build/development:
#	export $$(cat .env.local) > /dev/null; $(MAKE) build
#
#build/development/watch:
#	$(MAKE) build/development VITE_OPTS='--watch --sourcemap'
#
#build/production: typecheck
#	$(MAKE) build ENVIRONMENT=production
#
#typecheck: TSC_OPTS=
#typecheck:
#	npx tsc --noEmit $(TSC_OPTS)
#
#typecheck/watch:
#	$(MAKE) typecheck TSC_OPTS=--watch
