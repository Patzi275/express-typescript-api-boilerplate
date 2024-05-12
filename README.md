# Express API Boilerplate

This project is a boilerplate for building APIs with Express and Node.js. It follows best practices for organization and testing, making it a great starting point for your next project.

## Features

- Express: Fast, unopinionated, minimalist web framework for Node.js
- Authentication: Register, login, and protect routes using JWT

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Package used
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Nodemon](https://nodemon.io/) - Automatically restart the node application when file changes in the directory are detected
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
- [Express-validator](https://express-validator.github.io/docs/) - An express.js middleware for validator
- [MySQL2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl
- [Sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens


### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/Patzi275/express-typescript-api-boilerplate.git
2. Install NPM packages
    ```sh
    npm install

### Usage
After installing the dependencies, you can start the development server by running:
```sh
npm run dev
```
This will start the server at `http://localhost:3000`. The default port can be changed in the `.env` file.

<!-- ### Testing
To run the tests, use:
```sh
npm test
``` -->

### Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.