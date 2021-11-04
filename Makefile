TAG := keyspecs/regilex-admin:latest

# Build docker image
docker-build:
	@echo "Building Docker Image..."
	docker build -f deploy/docker/Dockerfile -t $(TAG) .
