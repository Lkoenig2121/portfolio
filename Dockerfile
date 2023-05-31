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

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app/build

RUN rm -rf *

COPY --from=builder /app/build .

EXPOSE 80 443

STOPSIGNAL SIGTERM

ENTRYPOINT ["nginx", "-g", "daemon off;"]
