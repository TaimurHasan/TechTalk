# TechTalk
## Description
[![Tech Talk Homepage](./assets/images/Screenshot%202022-05-23%20181040.png)](https://techtalkbytaimur.herokuapp.com/)

<br/>
TechTalk is an online tech blog, which allows a user to create an account and start posting blog posts. Beyond that, a user is able to edit and delete posts as needed, as well as leave comments on other user's posts. This project uses user authentication to ensure that only password-protected accounts are able to make, edit, and delete posts or comments. <br/>

Note: passwords are encrypted using the bcrypt npm package!
<br/>
<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Languages and Technologies Used:** 
- JavaScript ES6
- Node.js
- Express.js
- MySQL (Sequelize ORM)
- Handlebars

## Table of Contents

1. [ Installation ](#install)
1. [ Usage ](#usage)
2. [ License ](#license)
3. [ Contributing ](#contributing)
4. [ Questions ](#questions)

<a name="install"></a>

## Installation
To run this application locally, follow the steps listed below:
1. Download the latest version of node.js on your computer and ensure you have access to a MySQL account.
2. Clone this repository on your computer by opening your command-line interface and using git clone and the HTTPS or SSH URL retrieved from this repository's 'Code' dropdown above (e.g.git clone git@github.com:TaimurHasan/TechTalk.git).
3. Navigate or cd into the cloned directory from the CLI (i.e. cd ./TechTalk).
4. Initialize the NPM registry, as it hosts the required packages needed to run this application, using npm init -y.
5. Create a '.env' file provided in the root directory of repository and add the following:
- ```DB_NAME = 'tech_talks_db'```
- ```DB_USER = '<SQL user'>```
- ```DB_PW = '<SQL password'>```
6. Run mysql -u root -p to login into sql and run the following code lines to initialize the database and pre-populate its tables:
- ```source db/schema.sql```
7. Install the required packages using 'npm i'.
8. Call the application using ```node server.js``` to launch!

<a name="usage"></a>

## Usage
To use this application, please visit the deployed application on [Heroku](https://techtalkbytaimur.herokuapp.com/). <br/>

In order to use the full functionality of this application, please create an account. To create an account, navigate to the 'Login' page from the nav bar and click where prompted to sign up. You will be required to provide a unique username and a password to make an account. From there, navigate to your dashboard to create posts, or back to the homepage to view existing posts and leave comments!

![Tech Talk Login Page](./assets/images/Screenshot%202022-05-23%20180844.png)


<a name="license"></a>
## License
This project is licensed under the MIT License - see the [license info](https://opensource.org/licenses/MIT) for details.


<a name="contributing"></a>

## Contributing

This project can be contributed to by forking the application. For any contributions, please submit a Pull Request, which will be reviewed upon submission before acceptance.

<a name="questions"></a>

## Questions

[GitHub](https://github.com/TaimurHasan) <br/>
For any questions, please send an Email to [taimurhasan11@gmail.com](mailto:taimurhasan11@gmail.com)
