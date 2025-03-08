BUILD_DIR = build
APP_NAME = server
DOCKER_IMAGE = github.com/sushansapaliga.github.io/server
TAG = 0.1.0

all-build: build docker-build

build:
	mkdir -p $(BUILD_DIR)
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o $(BUILD_DIR)/$(APP_NAME) cmd/main.go
# docker run --rm -v "$$(pwd)":/go/src/$(APP_NAME) -w /go/src/$(APP_NAME) golang:alpine go build -o $(BUILD_DIR)/$(APP_NAME) cmd/main.go

docker-build:
	docker build -t $(DOCKER_IMAGE):$(TAG) .

run-server:
	go run cmd/main.go
