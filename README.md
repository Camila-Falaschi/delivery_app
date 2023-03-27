# :sparkles: Welcome to Delivery App Project Repository!
<div>
  <p>
    <img src="https://user-images.githubusercontent.com/102390423/227807440-34793b38-b08b-4057-bc89-8aa7f55edeff.png" alt="translation icon" width="20">
    You can also read this README in <a href="https://github.com/Camila-Falaschi/delivery_app/blob/main/README.pt-br.md">Portuguese</a>.
  </p>
</div>


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


## A bit of context
We created a persona to direct the functionalities that the app would have. And so, we have the following story:

Mrs. Teresa's beer distributor was once a small company that served only a specific area of the city. However, with an exceptional sales team and competitively priced products, the business has flourished and expanded to other locations.
So to speed up the delivery of its products, the company has more distribution points around the city, and one has a salesperson in charge of the place.
However, its old system was a set of spreadsheets that is now unworkable for the business because it requires too much maintenance for its huge demand. Therefore, Mrs. Teresa looked for a team of developers to streamline the lives of her employees and the people who buy her products.
