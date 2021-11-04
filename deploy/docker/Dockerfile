FROM node:14.15.3-alpine as compose

RUN apk update && apk add build-base git python
WORKDIR /app

COPY . .
RUN yarn install --production --frozen-lockfile

# Production Container
FROM node:14-alpine

WORKDIR /app
COPY --from=compose /app .

RUN npm install --global lumber-cli

COPY ./deploy/scripts/app/entrypoint.sh /
COPY ./deploy/scripts/app/configure.sh /

RUN chmod +x /entrypoint.sh /configure.sh
ENTRYPOINT ["/configure.sh", "/entrypoint.sh"]

EXPOSE 3000
CMD node server.js
