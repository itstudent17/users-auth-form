import React, { useState } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Actions, Content, FormShell, Header, LoginCard, Page } from "./LoginPage.styles";
import { loginByCredentials } from "@/features";

type LoginFormValues = {
  login: string;
  password: string;
};

export function LoginPage() {
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    setIsAuthorizing(true);
    try {
      await loginByCredentials(values);
      navigate("/users", { replace: true });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Ошибка авторизации";
      message.error(errorMessage);
    } finally {
      setIsAuthorizing(false);
    }
  };

  return (
    <Page>
      <LoginCard>
        <Content direction="vertical" size={16}>
          <Header>
            <Typography.Title level={3}>
              Авторизация
            </Typography.Title>
          </Header>

          <FormShell>
            <Form<LoginFormValues>
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              initialValues={{ login: "", password: "" }}
            >
              <Form.Item
                label=""
                name="login"
                rules={[{ required: true, message: "Поле не заполнено" }]}
              >
                <Input placeholder="Логин" />
              </Form.Item>

              <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: "Поле не заполнено" }]}
              >
                <Input.Password placeholder="Пароль" />
              </Form.Item>

              <Form.Item>
                <Actions>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={isAuthorizing}
                    loading={isAuthorizing}
                  >
                    Войти
                  </Button>
                </Actions>
              </Form.Item>
            </Form>
          </FormShell>
        </Content>
      </LoginCard>
    </Page>
  );
}

