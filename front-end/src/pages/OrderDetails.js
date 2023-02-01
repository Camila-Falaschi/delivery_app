import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../AppContext/AppContext';
import Navbar from '../components/Navbar';
import OrderTable from '../components/OrderTable';
import StatusSales from '../components/StatusSales';
import useLocalStorage from '../hooks/useLocalStorage';
import { requestGet } from '../services/request';

function OrderDetails() {
  const [user] = useLocalStorage('user');
  const { setOrder, order } = useContext(AppContext);
  const { id } = useParams();
  const [sellerName, setSellerName] = useState();
  const [date, setDate] = useState('');

  const getOrders = async () => {
    const { data } = await requestGet(`/sale/${id}`);
    const result = data.map((item) => ({
      ...item.product, ...item.sale, ...item,
    }));
    setOrder(result);
  };

  const getUsers = async () => {
    if (order.length > 0) {
      const sellers = await requestGet('/seller');
      console.log(order[0]);
      const result = sellers.data.find((e) => e.id === order[0].sellerId);
      setSellerName(result.name);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getUsers();
    if (order.length > 0) {
      console.log(typeof order[0].saleDate);
      setDate((new Date(order[0].saleDate)).toLocaleDateString('en-GB'));
    }
  }, [order]);

  return (
    <div>
      <Navbar />
      <h1>Detalhe do Pedido</h1>
      { order.length > 0
      && (
        <>
          <p
            data-testid={
              `${user.role}_order_details__element-order-details-label-order-id`
            }
          >
            Pedido
            00
            {id}
          </p>
          { (
            user.role === 'customer')
          && (
            <p
              data-testid={
                `${user.role}_order_details__element-order-details-label-seller-name`
              }
            >
              {sellerName}
            </p>
          )}
          <p
            data-testid={
              `${user.role}_order_details__element-order-details-label-order-date`
            }
          >
            { date }
          </p>
          <StatusSales saleIdOrder={ order[0].saleId } status={ order[0].status } />
        </>
      )}
      <OrderTable page="order_details" />
    </div>
  );
}

export default OrderDetails;
