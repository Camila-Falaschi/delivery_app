import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import { requestGet } from '../services/request';
import { CustomerOrderContainer, OrdersPageWrap } from '../styles/Order';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await requestGet('/sale');
    setOrders(data);
    console.log('o usuário consegue ver todos os pedidos existentes');
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <OrdersPageWrap>
        {orders.map((item) => (
          <CustomerOrderContainer key={ item.id }>
            <OrderCard order={ item } />
          </CustomerOrderContainer>)) }
      </OrdersPageWrap>
    </div>
  );
}

export default Orders;
