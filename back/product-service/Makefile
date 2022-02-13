build:
	go build -o cmd/main cmd/main/main.go

run:
	go run cmd/main/main.go

dev:
	nodemon --exec "go run" cmd/main/main.go --ext go --signal SIGTERM --watch

prod:
	go build -o cmd/main cmd/main/main.go
	./cmd/main/main

test:
	grc go test -v ./tests/

