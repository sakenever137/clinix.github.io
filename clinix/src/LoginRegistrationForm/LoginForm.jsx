
import { Form, Input, Button, Card } from 'antd';
import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [loading, setLoading] = useState(false);

  const handleFinish = ({ login, password }) => {
    setLoading(true);
    setTimeout(() => {
      onLogin(login, password);
      setLoading(false);
    }, 500);
  };

  return (
    <Card title="Вход">
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Логин" name="login" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
