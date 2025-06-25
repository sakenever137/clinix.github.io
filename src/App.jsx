import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
import { useState } from 'react';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Login/RegisterForm';

const { Header, Content, Footer } = Layout;
const users = {};

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const register = (login, password) => {
    if (users[login]) {
      message.error('Пользователь уже существует');
      return;
    }
    users[login] = password;
    message.success('Регистрация успешна!');
    navigate('/login');
  };

  const login = (login, password) => {
    if (users[login] === password) {
      setCurrentUser(login);
      message.success('Вы вошли как ' + login);
      navigate('/dashboard');
    } else {
      message.error('Неверный логин или пароль');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    message.info('Вы вышли');
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="home">
            <Link to="/">Главная</Link>
          </Menu.Item>
          {currentUser ? (
            <>
              <Menu.Item key="dashboard">
                <Link to="/dashboard">Панель</Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <Button type="primary" onClick={logout}>Выйти</Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="login">
                <Link to="/login">Вход</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/register">Регистрация</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>

      <Content style={{ padding: '50px', maxWidth: 400, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<h2>Добро пожаловать!</h2>} />
          <Route path="/login" element={<LoginForm onLogin={login} />} />
          <Route path="/register" element={<RegisterForm onRegister={register} />} />
          <Route
            path="/dashboard"
            element={
              currentUser ? <h2>Привет, {currentUser}!</h2> : <h2>Доступ запрещён</h2>
            }
          />
        </Routes>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design + React + Vite ©2024</Footer>
    </Layout>
  );
}
