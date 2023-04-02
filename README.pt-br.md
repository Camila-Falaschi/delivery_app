# :sparkles: Bem-vindo ao repositório do projeto Delivery App!
<div>
  <p>
    <img src="https://user-images.githubusercontent.com/102390423/227807440-34793b38-b08b-4057-bc89-8aa7f55edeff.png" alt="translation icon" width="20">
    Você também pode ler este README em <a href="https://github.com/Camila-Falaschi/delivery_app/blob/main/README.md">inglês</a>.
  </p>
</div>


<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/102390423/227815559-1e477dad-c5ab-444b-b326-db4adbb2e3f5.png" alt="project gif" width="500">
</div>


## Sumário

- [Sobre o projeto](#sobre-o-projeto)
  - [Um pouco de contexto](#um-pouco-de-contexto)
  - [Demo](#demo)
- [Construído com](#construído-com)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
- [Instalação](#instalação)
- [Uso](#uso)
  - [Banco de Dados](#banco-de-dados)
    - [Diagrama ER](#diagrama-er)
    - [Seeders](#seeders)
    - [Exemplo de um arquivo `.env`](#exemplo-de-um-arquivo-env)
    - [MySQL com Docker](#mysql-com-docker)
  - [API](#api)
  - [Testes](#testes)
- [Figma Design](#figma-design)
- [Desenvolvedores](#beers-desenvolvedores)


<br/>


## Sobre o projeto
Este projeto é um aplicativo de delivery desenvolvido para os clientes, funcionários e administradores de uma empresa. Ele permite vendas de produtos, registro de novos usuários, acompanhamento de pedidos e gerenciamento de usuários e pedidos.

Todos os usuários têm acesso através do login com diferentes permissões. O aplicativo valida o tipo de usuário a que a conta pertence usando o Token JWT. Além disso, o vendedor só pode ver os pedidos relacionados ao seu nome.

Tipos de usuários e suas permissões:

- Cliente pode:
  - Registrar uma nova conta
  - Comprar a partir da lista de produtos
  - Verificar o pedido antes de pagar
  - Acompanhar seus pedidos anteriores
  - Ver os detalhes do pedido
  - Alterar o status do pedido para recebido
- Vendedor pode:
  - Ver a lista de todos os pedidos atuais e anteriores
  - Ver os detalhes do pedido
  - Aprovar, preparar e entregar o pedido, alterando seu status
- Administrador pode:
  - Registrar novos usuários de qualquer tipo de função (vendedor, cliente ou administrador)
  - Ver a lista de todos os usuários

<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


### Um pouco de contexto
Nós criamos uma persona para direcionar as funcionalidades que o aplicativo teria. E assim, temos a seguinte história:

A distribuidora de cerveja da Dona Teresa era antes uma pequena empresa que atendia apenas uma área específica da cidade. No entanto, com uma equipe de vendas excepcional e produtos com preços competitivos, o negócio prosperou e se expandiu para outras localidades.

Para acelerar a entrega de seus produtos, a empresa possui mais pontos de distribuição ao redor da cidade, e cada um tem um vendedor responsável pelo local. No entanto, o antigo sistema era um conjunto de planilhas que agora é inviável para o negócio, pois requer muita manutenção para sua enorme demanda. Portanto, a Dona Teresa procurou uma equipe de desenvolvedores para simplificar a vida de seus funcionários e das pessoas que compram seus produtos.

<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


### Demo
<img src="https://user-images.githubusercontent.com/102390423/227815628-7b4ec35c-6153-4b79-8eb5-0e976c3a105b.gif" alt="project gif" width="300">
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


## Construído com
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

<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


## Instalação
1. Clone o repositório:
   - Use o comando: `git clone git@github.com:Camila-Falaschi/delivery_app.git`
   - Navegue até a pasta do repositório clonado: `cd delivery_app`

2. Instale as dependências:
   - Execute o comando `npm install` no diretório raiz (`~/delivery_app`), no diretório front-end (`~/delivery_app/front-end`), e no diretório back-end (`~/delivery_app/back-end`).
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


## Uso
Para iniciar o projeto, siga os seguintes passos:

1. Crie e configure um arquivo `.env` com as suas variáveis de ambiente no diretório back-end. Caso contrário, a configuração do banco de dados usará os valores padrão.
2. Instale o banco de dados MySQL e verifique se ele está sendo executado no seu computador ou em um contêiner ([veja como usar o MySQL com o Docker](#mysql-with-docker)).
3. Abra o terminal na pasta raiz (`~/delivery_app`) e execute os seguintes comandos:
- `npm run db:reset` - Isso executará os scripts do Sequelize e restaurará o banco de dados de desenvolvimento.
- `npm run start` - Isso limpará as portas 3000 e 3001 e iniciará a aplicação.

Observação: O projeto foi projetado com uma estratégia "mobile-first". Para obter a melhor experiência, redimensione sua tela para 360 x 800.
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>

### Banco de Dados
#### Diagrama ER
![diagram-er](https://user-images.githubusercontent.com/102390423/229248544-f600aa1d-ed7b-4105-b5f4-c71909affad5.png)
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>

#### Seeders
O banco de dados vem com três usuários padrões (cliente, vendedor e administrador) e onze bebidas padrões. Você pode usar as seguintes credenciais para testar o aplicativo:

- Cliente:
  ```
  name: Cliente Zé Birita
  email: zebirita@email.com
  password: $#zebirita#$
  ```

- Vendedor:
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
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>

#### Exemplo de um arquivo `.env`
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
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>

#### MySQL com Docker
Para usar o MySQL com Docker, você precisa ter o Docker instalado em sua máquina. Para verificar se você tem o Docker instalado, abra o prompt de comando e digite:
`docker --version`

Este comando deve retornar algo semelhante a:
`Docker version 23.0.2`

Depois de ter o Docker instalado, você pode criar o contêiner com o seguinte comando. Lembre-se de alterar o nome do contêiner e a senha:
`docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7`
This command will create a MySQL container with the name `container-mysql`, set the root password to `senha-mysql`, and expose the MySQL port 3306 to your local port 3306.
Este comando criará um contêiner MySQL com o nome `container-mysql`, irá definir a senha de root como `senha-mysql` e irá expor a porta MySQL 3306 para a porta local 3306.
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


### API
#### `/login`
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229256445-34c267eb-f1e0-417c-be9f-e948c384b3de.png" alt="post icon" width="80">
  </summary><br>
  
  **Exemplo de Valores de Parâmetros**
  ```
  {
    "email": "zebirita@email.com",
    "password": "$#zebirita#$"
  }
  ```

  
  <br />


  **Respostas**
  
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
  
  **Exemplo de Valores de Parâmetros**
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "password": "123456"
  }
  ```

  
  <br />


  **Respostas**
  
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
  
  **Respostas**
  
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
  
  **Exemplo de Valores de Parâmetros**
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


  **Respostas**
  
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

  Status dos pedidos:
  - "Pendente"
  - "Preparando"
  - "Em Trânsito"
  - "Entregue"
    
 
  **Exemplo de Valores de Parâmetros**
  ```
  {
    "saleId": 1, 
    "status": "Preparando"
  }
  ```
  
  
  <br />


  **Respostas**
  
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

  **Respostas**
  
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

  **Respostas**
  
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

  **Respostas**
  
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
  
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Respostas**
  
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
  
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Respostas**
  
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
 
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```

  
  <br />


  **Exemplo de Valores de Parâmetros**
  ```
  {
    "name": "New Name Example",
    "email": "example@email.com",
    "password": "123456"
  }
  ```

  
  <br />


  **Respostas**
  
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
  
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```
  

  <br />

  
  **Respostas**
  
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

<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


### Testes
Para executar os testes, abra o terminal nos diretórios front-end e back-end e digite o comando `npm test` ou `npm run test`.

Observe que os testes do front-end podem falhar devido à falta de atributos `data-testid`. A equipe removeu alguns atributos `data-testid` após a fase de desenvolvimento para focar no design do aplicativo.

<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


## Figma Design
A equipe criou um modelo de planejamento de projeto no Figma, que você pode acessar clicando neste <a href="https://www.figma.com/file/8quEpcnij9tGUC6bPR2kgW/Delivery-App?node-id=0%3A1&t=Amq0MaEjctZb8nPa-1">link</a>.
<details>
  <summary>
    <strong>Imagem</strong>
  </summary><br>
  <img src="https://user-images.githubusercontent.com/102390423/229236282-296acb2e-7827-4d8d-8c9f-9a6985ef262b.png" alt="figma design">
</details>
<p align="right"><a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a></p>


<br/>


## :beers: Desenvolvedores
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
<a href="#sparkles-bem-vindo-ao-repositório-do-projeto-delivery-app">(De volta ao topo)</a>
