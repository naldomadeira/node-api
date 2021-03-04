# REST API
## REST API em Node.js, Express.js and MongoDB - Product registration and handling API

![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![EXPRESS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## Technologies
- NodeJs
- Insomnia
- Container Docker MongoDB

## Dependecies
- Express
- Mongoose
- Nodemon
- Mongoose-paginate
- Cors
- Require-dir

## Usage
```sh
$ git clone https://github.com/naldomadeira/node-api.git
$ cd node-api
$ npm install
```
> Modify the MongoDB connection string according to your environment

```sh
$ npm start
```
## REST architecture
> The following is a generic localhost configuration on port: 3000
> Note: base_url: `http://localhost:3000/api`

**List of all product** - GET: base_url/products

**Create a product** - POST: base_url/products

**List a product** - GET: base_url/products/:id

**Update a product** - PUT: base_url/products/:id

**Delete a product** - Delete base_url/product/:id

## Tests
They were entirely carried out in the automated environment of insomnia. Insomnia is an extremely useful tool for testing manually or automating the testing of any REST API.

![insomnia](https://user-images.githubusercontent.com/1483851/110018248-dfeb9980-7d05-11eb-9eb8-f0000d585a23.PNG)

## Credits
This API was developed by Naldo Madeira
