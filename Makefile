MAKEFLAGS+="-j 2"

.PHONY: all

all: dev

dev-backend:
	yarn start:dev

dev-client:
	yarn client:dev

dev: dev-backend dev-client