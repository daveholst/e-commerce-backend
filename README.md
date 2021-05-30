# E-Commerce Backend: Online store Database and API Server.

This is an express server that provides an API for interacting with a mySQL database. It allows the front end to interact with the mySQL server via the following routes.

- `/api/products/` Manage Products - Add, View, Update, Delete
- `/api/categories/` Manage Categories - Add, View, Update, Delete
- `/api/tags/` Manage Tags - Add, View, Update, Delete

## Table of Contents:

- [License](#License)
- [Live Deploy](#Live-Deploy)
- [YouTube Demo](#YouTube-Demo)
- [Technology Stack](#Technology-Stack)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the **MIT License**: https://opensource.org/licenses/MIT

## Live Deploy

If you want to experiment with this api a deployed version is available at: https://e-comms-backend.holst.club/api/categories

## YouTube Demo

A recorded demo of this app is hosted on youTube at: https://youtu.be/PwXhhAzejDM

## Technology Stack

- DigitalOcean (Hosting) - https://www.digitalocean.com/
- Dokku (PaaS - open source Heroku)- https://dokku.com/
- mySQL Server (Remote - Docker): https://hub.docker.com/_/mysql
- mysql2: https://www.npmjs.com/package/mysql2
- sequelize: https://www.npmjs.com/package/sequelize

## Usage

This software needs access to a mySQL database for storage of persistent information. `./config/connection.js` should be edited to reflect the settings of the chosen server. A `./db/schema.sql` file has been included to build the appropriate databases. A .env file is the recommended method of storing the database url. An example file has been supplied `./.env.EXAMPLE`

To seed the database a script has been provided

```bash
npm run seed
```

To use the program simply run the program from your preferred terminal and follow the prompts.

```bash
npm start
```

## Tests

No tests have been written for this software.

## Questions

If you have any further questions you can get in contact with the creator through the following methods:

- https://github.com/daveholst/
- dholst@glenholst.com.au
