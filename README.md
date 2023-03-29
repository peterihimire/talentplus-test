# TALENT-PLUS TEST

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)
- [Demo](#demo)

## General info

This is Talent-plus test project, bootstrapped with create-react-app, docker and nginx webserver.

## Technologies

Project is created with:

- Node version: node:19.6.0-alpine
- React version: 18.2.0
- React-Router-DOM version: 6.9.0
- Swiper version: 9.1.1
- React-Helmet-Async version: 1.3.0
- Hamburgers version: 1.2.1
- Docker version: 3.8
- Nginx version: 1.21.0-alpine

## Setup

To run this project, install it locally using npm:

```
$ git clone https://github.com/peterihimire/talentplus-test.git
$ cd talentplus-test
$ docker-compose -f docker-compose.prod.yml build
$ docker run -p 80:80 --name talentplus-app talentplus-test-prod


Then visit ( http://localhost:80 ) to see the live static website on production mode.
```

## Sources

This app was inspired by TechTime”
thats it [@techtime](https://)

## Demo

You can view the live website of this application by visiting this [link](https://)
