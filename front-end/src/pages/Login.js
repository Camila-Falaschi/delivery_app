import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Logo from '../images/logo.svg';
import { requestPost, setToken } from '../services/request';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useLocalStorage('user');

  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = (/\S+@\S+\.\S+/.test(email));
    const passwordLength = 6;
    const verifyPassword = (password.length >= passwordLength);
    if (verifyEmail && verifyPassword) setIsDisabled(false);
  }, [email, password]);

  useEffect(() => {
    async function logged() {
      try {
        setToken(user.token);
        if (user.role === 'customer') {
          navigate('/customer/products');
        }
      } catch (error) {
        localStorage.clear();
        navigate('/login');
      }
    }
    logged();
  }, []);

  const getUserPage = (role) => {
    if (role === 'customer') return 'products';
    if (role === 'seller') return 'orders';
  };

  const handleLoginButton = async (event) => {
    event.preventDefault();

    try {
      const { data } = await requestPost('/login', { email, password });
      setToken(data.token);
      setUser(data);
      if (data.role === 'administrator') return navigate('/admin/manage');
      const page = getUserPage(data.role);
      navigate(`/${data.role}/${page}`);
    } catch (error) {
      setErrorMessage('*Sinto muito, seu login ou senha está incorreto.');
    }
  };

  return (
    <main>
      <img src={ Logo } alt="app-logo" />
      <form>
        <label htmlFor="login">
          Login
          <input
            type="email"
            id="login"
            data-testid="common_login__input-email"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="common_login__input-password"
            placeholder="************"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            required
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          onClick={ (event) => handleLoginButton(event) }
          disabled={ isDisabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      {(errorMessage !== '') && (
        <p data-testid="common_login__element-invalid-email">
          {errorMessage}
        </p>
      )}
    </main>
  );
}

export default Login;
