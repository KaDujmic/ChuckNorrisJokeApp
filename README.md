# <a name="readme-top"></a>

<h1 align="center">Chuck Norris Joke App</h1>

  <h3>Table of Contents</h3>
  <ol>
    <li>
      <a href="#about-the-app">About The App</a>
      <ul>
        <li><a href="#notable-backend-features">Backend</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api-description">API Description</a></li>
  </ol>

## About The App

Fun project to generate random Chuck Norris jokes and send them to the users email.

### Notable Backend Features:

- REST API
- PostgreSQL database
- Sign Up with your information
- Log In with your email and password
- A specific route restricted to logged in users to receive a joke
- Authorization system enabling only the logged in users to get jokes
- Node mailer setup to send the jokes to the current logged in user email

#### Backend Built With:

- [![nodejs.shield]][nodejs.url]
- [![express.shield]][express.url]
- [![postgres.shield]][postgres.url]
- [![sequelize.shield]][sequelize.url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)/[PgAdmin](https://www.pgadmin.org/)
- Node Package Manager
  ```
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```
   git clone https://github.com/KaDujmic/ChuckNorrisJokeApp.git
   ```
2. Install NPM packages (In both the server and client subfolders)
   ```
   npm install
   ```
3. Rename and modify the .env.example file in the working directory, to suit your needs

4. In the server folder run the following command to setup the database containers and volumes:

   ```
   docker compose up
   ```

5. In the server folder run the following commands to migrate and seed the database:
   ```
    npm run migrate:{env}
    npm run seed:{env}
   ```
6. In the server folder run the following command to start the backend:

   ```
    npm run start:{env}
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API Description

There are two ways to review the API and its possibilities:

- <a href="#swagger-ui">Swagger UI</a>
- <a href="#postman-collection">Postman Collection</a>

Note that requests require authentication. Use the login route to authenticate as either a customer, or sales person.<br>
Login info is included in the API examples.

### Swagger UI

You can import swagger.js collection in to [Swagger Editor](https://editor.swagger.io/)


### Postman Collection

A postman collection is included in the working directory. It contains a list of all possible requests that can be run as a whole.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Third Party API used for retrieving Chuck Norris jokes: <a href="https://api.chucknorris.io/jokes/random">Funny Jokes</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[nodejs.shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs.url]: https://nodejs.org/en/
[express.shield]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express.url]: https://expressjs.com
[postgres.shield]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[postgres.url]: https://www.postgresql.org/
[sequelize.shield]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[sequelize.url]: https://sequelize.org/
[react.shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react.url]: https://reactjs.org/
