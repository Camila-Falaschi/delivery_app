# :sparkles: Welcome to Delivery App Project Repository!
<div>
  <p>
    <img src="https://user-images.githubusercontent.com/102390423/227807440-34793b38-b08b-4057-bc89-8aa7f55edeff.png" alt="translation icon" width="20">
    You can also read this README in <a href="https://github.com/Camila-Falaschi/delivery_app/blob/main/README.pt-br.md">Portuguese</a>.
  </p>
</div>


<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/102390423/227815559-1e477dad-c5ab-444b-b326-db4adbb2e3f5.png" alt="project gif" width="500">
</div>


## Table of Contents

- [About the project](#about-the-project)
  - [A bit of context](#a-bit-of-context)
  - [Demo](#demo)
- [Build with](#build-with)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
- [Installation](#installation)
- [Usage](#usage)
  - [Database](#database)
    - [Migrations and Seeders](#migrations-and-seeders)
    - [Example of an `.env` file](#env-file)
    - [MySQL With Docker](#docker-vs-local)
  - [API](#api)
  - [Scripts root packet.json](#scripts-root-packetjson)
  - [Tests](#tests)
- [Developers](#beers-developers)


<br/>


## About the project
This project is a delivery application developed for a company's customers, employees, and administrators. It allows product sales, registration of new users, order tracking, and user and order management.
All users have access through login with different permissions. The app validates the type of user the account belongs to using JWT Token. Also, the seller can only see the orders related to their name.

Types of users and their permissions:
- Customer can:
  - Register a new account
  - Buy from the list of products
  - Check out their order before paying
  - Keep track of their past orders
  - See the details of the order
  - Change the order status to received
- Seller can:
  - See the list of all current and past orders
  - See the details of the order
  - Approve, prepare, and deliver the order by changing its status
- Administrator can:
  - Register new users of any role type (seller, client, or administrator)
  - See the list of all users

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


### A bit of context
We created a persona to direct the functionalities that the app would have. And so, we have the following story:

Mrs. Teresa's beer distributor was once a small company that served only a specific area of the city. However, with an exceptional sales team and competitively priced products, the business has flourished and expanded to other locations.
So to speed up the delivery of its products, the company has more distribution points around the city, and one has a salesperson in charge of the place.
However, its old system was a set of spreadsheets that is now unworkable for the business because it requires too much maintenance for its huge demand. Therefore, Mrs. Teresa looked for a team of developers to streamline the lives of her employees and the people who buy her products.

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


### Demo
<img src="https://user-images.githubusercontent.com/102390423/227815628-7b4ec35c-6153-4b79-8eb5-0e976c3a105b.gif" alt="project gif" width="300">
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## Build with
#### Front-end
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- <img src="https://user-images.githubusercontent.com/102390423/227817511-e68fa9dd-fbb5-42d9-b106-a583fcc7814c.png" alt="axios badge" width="150">
- <img src="https://user-images.githubusercontent.com/102390423/227822689-3f4b1339-c886-4948-a789-924850d52286.png" alt="react testing library badge" width="165">
- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


#### Back-end
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
- ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)
- ![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
- <img src="https://user-images.githubusercontent.com/102390423/227820045-f40c51e7-31fb-42c5-8022-0463851ee613.png" alt="sinon badge" width="100">

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## Installation
1. Clone the repository
   - Use the command: `git clone git@github.com:Camila-Falaschi/delivery_app.git`.
   - Access the folder of the repository that you just cloned: `cd delivery_app`

2. Install the dependencies

   - Use the command: `npm install`
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## Usage
To start the project you can type 
  
To start the project you need to:
1. Create and configure an `.env` file with your environment variables, otherwise the database config is going to use the standart values.
2. Have database MySQL installed and running in your computer or in a container([see how to use MySQL with Docker](#mysql-with-docker)).

After that on the root terminal (`~/delivery_app`) you can create the database with the following script:
- `npm run db:reset` - It's going to execute the `Sequelize` scripts

3. Execute the migrations and populate the database with the seeders, to do this quicker, you can type on .


### Database
#### ER Diagram
#### Migrations and Seeders
#### Example of an `.env` file
#### MySQL With Docker

### API

### Scripts root `packet.json`

### Tests

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## :beers: Developers
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Camila-Falaschi">
        <img src="https://avatars.githubusercontent.com/u/102390423?v=4" width="100px" alt="Camila Falaschi"/>
        <p>Camila Falaschi</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PedroPA94">
        <img src="https://avatars.githubusercontent.com/u/75266925?v=4" width="100px" alt="Pedro Papini"/>
        <p>Pedro Papini</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rogelins">
        <img src="https://avatars.githubusercontent.com/u/102386171?v=4" width="100px" alt="Rogerio Lins"/>
        <p>Rogerio Lins</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/albertassihatus">
        <img src="https://avatars.githubusercontent.com/u/78430305?v=4" width="100px" alt="Hatus Albertassi"/>
        <p>Hatus Albertassi</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ellenmelody">
        <img src="https://avatars.githubusercontent.com/u/98178604?v=4" width="100px" alt="Ellen Melody"/>
        <p>Ellen Melody</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/trybe-tech-ops">
        <img src="https://avatars.githubusercontent.com/u/82593112?v=4" width="100px" alt="Trybe"/>
        <p>Trybe</p>
      </a>
    </td>
  </tr>
</table>
<a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a>
