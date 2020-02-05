# react-docker-config

**Prerequisites**

- node
- docker

## Install

Install NPM dependencies:

```sh
$ npm ci
```

## Start

Run development server:

```sh
$ npx webpack-dev-server
```

The front should be available at [http://localhost:8080](http://localhost:8080).

## Build

Build sources with:

```sh
$ npx webpack
```

## Deploy

Build Docker image with:

```sh
$ docker build -t react-docker-config:0.0.1 .
```

Create container from previously built image:

```sh
$ docker run \
  --rm -ti \
  -p "8080:80" \
  -v "$(pwd)/config/config-prod.json:/usr/share/nginx/html/config/config.json:ro" \
  react-docker-config:0.0.1
```
