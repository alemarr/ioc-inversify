# IoC and InversifyJS

A little demo API that implements Inversion of Control (IoC) using InversifyJS and Typescript.

It contains two dummy endpoints that are used to test the concepts from the implementation.

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

To test the endpoints, just access them from your browser.

**Create a new post**
```
  GET http://localhost:3010/post/add
```

**Note:** I'm using the `GET` method to create posts for the sake of simplicity. This demo is a POC of Inversion of Control, not a REST API demo.

**Get the posts list**
```
  GET http://localhost:3010/post
```

## TO DO

* Unit testing

## Author

Alejandro Marr
