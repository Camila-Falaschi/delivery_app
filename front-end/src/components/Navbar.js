import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function Navbar() {
  const [user] = useLocalStorage('user');

  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header>
      { user && (
        <>
          <div>
            <button
              data-testid="customer_products__element-navbar-link-products"
              type="button"
              onClick={ () => navigate(`/${user.role}/products`) }
            >
              Produtos
            </button>
          </div>
          <div>
            <button
              data-testid="customer_products__element-navbar-link-orders"
              type="button"
              onClick={ () => navigate(`/${user.role}/orders`) }
            >
              Pedidos
            </button>
          </div>
          <div data-testid="customer_products__element-navbar-user-full-name">
            <h1>{user.name}</h1>
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => handleExit() }
            >
              Sair
            </button>
          </div>
        </>)}
    </header>
  );
}
export default Navbar;
