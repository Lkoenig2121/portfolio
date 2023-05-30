FROM node:16-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash
RUN apk add openssl1.1-compat

ENV NODE_OPTIONS="--max-old-space-size=8192"

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

STOPSIGNAL SIGTERM

CMD ["npm", "start"]