AWS_PROFILE := tetsuzawa_el
REPOSITORY_NAME := kokutou-questplus

.PHONY: init/ecr/create-repository
init/ecr/create-repository:
	aws --profile $(AWS_PROFILE) ecr create-repository --repository-name $(REPOSITORY_NAME)


.PHONY: sam/build
sam/build:
	sam build

.PHONY: sam/local/invoke
sam/local/invoke:
	sam local invoke --event events/apigateway-proxy.json
