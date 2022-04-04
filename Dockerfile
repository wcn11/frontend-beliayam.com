FROM node:16-alpine

RUN build.sh

RUN mkdir /app

RUN apk update

RUN apk add vim nano

WORKDIR /app

COPY . .

# ENTRYPOINT ["npm","run", "dev"]