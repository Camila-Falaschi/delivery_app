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
    - [ER Diagram](#er-diagram)
    - [Seeders](#seeders)
    - [Example of an `.env` file](#env-file)
    - [MySQL With Docker](#docker-vs-local)
  - [API](#api)
  - [Tests](#tests)
- [Figma Design](#figma-design)
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
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
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
1. Clone the repository:
   - Use the command: `git clone git@github.com:Camila-Falaschi/delivery_app.git`
   - Navigate to the cloned repository folder: `cd delivery_app`

2. Install the dependencies:
   - Run the command `npm install` in the root directory (`~/delivery_app`), front-end directory (`~/delivery_app/front-end`), and back-end directory (`~/delivery_app/back-end`).
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## Usage
To start the project, follow these steps:
1. Create and configure an `.env` file with your environment variables in the back-end directory. Otherwise, the database configuration will use the default values.
2. Install MySQL database and ensure it is running on your computer or in a container ([see how to use MySQL with Docker](#mysql-with-docker)).
3. Open the root terminal (`~/delivery_app`) and run the following commands:
- `npm run db:reset` - This will execute the Sequelize scripts and restore the development database.
- `npm run start` - This will clean the 3000 and 3001 ports and start the application.

Note: The project was designed with a mobile-first strategy. For the best experience, resize your screen to 360 x 800.
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>

### Database
#### ER Diagram
![diagram-er](https://user-images.githubusercontent.com/102390423/229248544-f600aa1d-ed7b-4105-b5f4-c71909affad5.png)
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>

#### Seeders
The database comes with three default users (client, seller, and admin) and eleven default drinks. You can use the following credentials to test the application:

- Client:
  ```
  name: Cliente Zé Birita
  email: zebirita@email.com
  password: $#zebirita#$
  ```

- Seller:
  ```
  name: Fulana Pereira
  email: fulana@deliveryapp.com
  password: fulana@123
  ```

- Admin:
  ```
  name: Delivery App Admin
  email: adm@deliveryapp.com
  password: --adm2@21!!--
  ```
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>

#### Example of an `.env` file
```
NODE_ENV=development
API_PORT=3001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=DBpassword
MYSQL_DB_NAME=delivery-app
EVAL_ALWAYS_RESTORE_DEV_DB=true
```
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>

#### MySQL With Docker
To use MySQL with Docker, you need to have Docker installed on your machine. To check if you have Docker installed, open the command prompt and type:
`docker --version`

This command should return something similar to this:
`Docker version 23.0.2`

Once you have Docker installed, you can create the container with the following command. Remember to change the container name and password:
`docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7`
This command will create a MySQL container with the name `container-mysql`, set the root password to `senha-mysql`, and expose the MySQL port 3306 to your local port 3306.
<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


### API
#### `/login`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229256445-34c267eb-f1e0-417c-be9f-e948c384b3de.png" alt="post icon" width="80">
  </summary><br>
  
  **Parameters Example Values**
  ```
  {
    "email": "zebirita@email.com",
    "password": "$#zebirita#$"
  }
  ```

  
  <br />


  **Responses**
  
  Status: 200 OK
  ```
  {
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Incorrect password"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "User not found"
  }
  ```
</details>

#### `/register`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229256445-34c267eb-f1e0-417c-be9f-e948c384b3de.png" alt="post icon" width="80">
  </summary><br>
  
  **Parameters Example Values**
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "password": "123456"
  }
  ```

  
  <br />


  **Responses**
  
  Status: 201 Created  
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Username must have at least 12 characters"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
  
  Status: 409 Conflict
  ```
  {
    "message": "User already exist"
  }
  ```
</details>

#### `/seller`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">
  </summary><br>
  
  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "id": 2,
      "name": "Fulana Pereira"
    }
  ]
  ```
</details>

#### `/sale`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229256445-34c267eb-f1e0-417c-be9f-e948c384b3de.png" alt="post icon" width="80">
  </summary><br>
  
  **Parameters Example Values**
  ```
  {
    "cart": [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "quantity": 2,
        "unityPrice": 2.30,
        "subTotal": 4.60
      },
      {
        "id": 2,
        "name": "Heineken 600ml",
        "quantity": 1,
        "unityPrice": 1.20,
        "subTotal": 1.20
      }
    ],
    "totalPrice": 88.8,
    "sellerId": 1,
    "deliveryAddress": "R. Somewhere, Place Anywhere - NW",
    "deliveryNumber": 121,
    "userEmail": "zebirita@email.com"
  }
  ```
  
  
  <br />


  **Responses**
  
  Status: 201 Created
  ```
  {
    "saleId": 1
  }
  ```
</details>
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229361492-4190f567-633e-4812-bbf9-8a6e3eea9292.png" alt="put icon" width="80">   
    
    /sale/orders
  </summary><br>

  Orders Status:
  - "Pendente"
  - "Preparando"
  - "Em Trânsito"
  - "Entregue"
    
 
  **Parameters Example Values**
  ```
  {
    "saleId": 1, 
    "status": "Preparando"
  }
  ```
  
  
  <br />


  **Responses**
  
  Status: 200 OK
  ```
  [
    1   // saleId
  ]
  ```
</details>
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">   
  </summary><br>

  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "saleDate": "2023-04-02 15:23:10 +00:00",
      "id": 1,
      "status": "Preparando",
      "totalPrice": "88.80",
      "deliveryAddress": "R. Somewhere, Place Anywhere - NW"
    },
    {
      "saleDate": "2023-04-02 15:23:10 +00:00",
      "id": 2,
      "status": "Pendente",
      "totalPrice": "88.80",
      "deliveryAddress": "R. Somewhere, Place Anywhere - NW"
    }
  ]
  ```
</details>
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">
        
    /sale/:id
  </summary><br>

  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "saleId": 2,
      "productId": 1,
      "quantity": 2,
      "product": {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20"
      },
      "sale": {
        "saleDate": "2023-04-02 15:24:28 +00:00",
        "userId": 3,
        "sellerId": 1,
        "totalPrice": "88.80",
        "deliveryAddress": "R. Somewhere, Place Anywhere - NW",
        "deliveryNumber": "121",
        "status": "Pendente",
        "seller_id": 1
      }
    },
    {
      "saleId": 2,
      "productId": 2,
      "quantity": 1,
      "product": {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "7.50"
      },
      "sale": {
        "saleDate": "2023-04-02 15:24:28 +00:00",
        "userId": 3,
        "sellerId": 1,
        "totalPrice": "88.80",
        "deliveryAddress": "R. Somewhere, Place Anywhere - NW",
        "deliveryNumber": "121",
        "status": "Pendente",
        "seller_id": 1
      }
    }
  ]
  ```
</details>

#### `/customer`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">   
    
    /customer/products
  </summary><br>

  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "url_image": "http://localhost:3001/images/skol_lata_350ml.png"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "url_image": "http://localhost:3001/images/heineken_600ml.png"
    },
    ...
  ]
  ```
</details>

#### `/products`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">
  </summary><br>
  
  **Headers Parameter**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "url_image": "http://localhost:3001/images/skol_lata_350ml.png"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "url_image": "http://localhost:3001/images/heineken_600ml.png"
    },
    ...
  ]
  ```
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
</details>

#### `/admin`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">
  </summary><br>
  
  **Headers Parameter**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Responses**
  
  Status: 200 OK
  ```
  [
    {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "role": "seller"
    },
    {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "role": "customer"
    }
  ]
  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
</details>
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229256445-34c267eb-f1e0-417c-be9f-e948c384b3de.png" alt="post icon" width="80">
  </summary><br>
 
  **Headers Parameter**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Parameters Example Values**
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "password": "123456"
  }
  ```

  
  <br />


  **Responses**
  
  Status: 201 Created  
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Username must have at least 12 characters"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
   
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
  
  Status: 409 Conflict
  ```
  {
    "message": "User already exist"
  }
  ```
</details>
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229363520-c54cf826-9995-48ae-9547-bf4c0f658d56.png" alt="get icon" width="80">
        
    /admin/:id
  </summary><br>
  
  **Headers Parameter**
  ```
  Authorization: JsonWebToken
  ```
  

  <br />

  
  **Responses**
  
  Status: 201 Created
  ```

  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
</details>

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


### Tests
To run the tests, open the terminal in both the front-end and back-end directories and type the command `ǹpm test` or `npm run test`.
Note that the front-end tests might fail due to missing `data-testid` attributes. The team removed some `data-testid` attributes after the development phase to focus on app design.

<p align="right"><a href="#sparkles-welcome-to-delivery-app-project-repository">(back to top)</a></p>


<br/>


## Figma Design
The team created an template on Figma for the planning of the project. You can acess it <a href="https://www.figma.com/file/8quEpcnij9tGUC6bPR2kgW/Delivery-App?node-id=0%3A1&t=Amq0MaEjctZb8nPa-1">here</a>.
<details>
  <summary>
    <strong>Image</strong>
  </summary><br>
  <img src="https://user-images.githubusercontent.com/102390423/229236282-296acb2e-7827-4d8d-8c9f-9a6985ef262b.png" alt="figma design">
</details>
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
