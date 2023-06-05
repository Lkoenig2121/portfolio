# image Base
FROM node:16-alpine AS builder
RUN apk update
RUN apk upgrade
RUN apk add bash

# set working directory
WORKDIR /app

# copy files
COPY . /app

# install dependencies
RUN npm install

# build app
RUN npm run build

# serve app via nginx
FROM nginx:alpine
COPY site /usr/share/nginx/html