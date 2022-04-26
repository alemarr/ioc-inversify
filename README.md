# IoC and InversifyJS

A little demo API that implements Inversion of Control (IoC) using InversifyJS and Typescript.

**UPDATE (May 2022):**

Added a few changes to improve this project:

* Removed dummy endpoint and implemented a new one using `POST` and handling a basic payload.
* Split the project into layers for a better structure. 
* Added [inversify-express-utils](https://github.com/inversify/inversify-express-utils) to implement new API endpoints.
* Added Unit Tests.

This repo is related to [my article](https://medium.com/@alejandromarr/inversion-of-control-ioc-principle-using-typescript-and-inversifyjs-11bac5a0bbc2) on Medium about the Inversion of Control principle and InversifyJS.

## Setup

```bash
$ npm install
```

## Run and test API

Run the API with the following command:

```bash
$ npm run start
```

### Endpoints

**Create a new post**
```
curl --location --request POST 'http://localhost:3000/api/posts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Proof of Concept",
    "description": "Here goes the description of my new post."
}'
```

**Get the posts list**
```
curl --location --request GET 'http://localhost:3000/api/posts'
```

## Author

Alejandro Marr
