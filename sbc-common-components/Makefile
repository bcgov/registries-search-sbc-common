.PHONY: setup
.PHONY: ci cd

PROJECT_NAME:=sbc-common-components-web
DOCKER_NAME:=sbc-common-components-web

#################################################################################
# COMMANDS -- Setup
# expects the terminal to be openshift login
# expects export OPENSHIFT_REPOSITORY=""
#################################################################################
setup: ## Clean and Install npm dependencies
	npm ci

create-env: ## create the configration files from dev
	@oc get configmap $(DOCKER_NAME)-dev-keycloak-config  -n "$(OPENSHIFT_REPOSITORY)-dev" \
		-o json | jq -r '.data["keycloak.json"]' > ./public/config/kc/keycloak.json.dev
	@oc get configmap $(DOCKER_NAME)-dev-ui-configuration  -n "$(OPENSHIFT_REPOSITORY)-dev" \
		-o json | jq -r '.data["configuration.json"]' > ./public/config/configuration.json.dev

#################################################################################
# COMMANDS - CI                                                                 #
#################################################################################
ci: lint test

lint:  ## Run linting ofcode.
	npm run lint

test:  ## Unit testing
	npm run test:unit

build: ## Build the docker container
	docker build . -t $(DOCKER_NAME) \
		--build-arg VCS_REF=$(shell git rev-parse --short HEAD) \
		--build-arg BUILD_DATE=$(shell date -u +"%Y-%m-%dT%H:%M:%SZ") \

build-nc: ## Build the docker container without caching
	docker build --no-cache -t $(DOCKER_NAME) .

#################################################################################
# Self Documenting Commands                                                     #
#################################################################################
.PHONY: help

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
