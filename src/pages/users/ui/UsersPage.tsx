import React, { useState } from "react";
import { Avatar, Button, List, Result, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useUsersQuery } from "@/entities";
import { AUTH_TOKEN_STORAGE_KEY } from "@/shared/config";
import { Content, Footer, Header, Page } from "./UsersPage.styles";
import { CreateUserModal } from "@/features";

export function UsersPage() {
  const { data: users, isLoading, isError, error, refetch } = useUsersQuery();
  const navigate = useNavigate();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    navigate("/login", { replace: true });
  };

  return (
    <Page>
      <Header>
        <div>
          <Typography.Title level={2}>
            Список пользователей
          </Typography.Title>
          {!isLoading && !isError && (
            <Typography.Text type="secondary">
              Всего пользователей: {users?.length ?? 0}
            </Typography.Text>
          )}
        </div>

        <Button type="primary" onClick={handleLogout}>Выход</Button>
      </Header>

      <Content>
        {isLoading && <Spin tip="Загрузка..." />}

        {isError && (
          <Result
            status="error"
            title="Ошибка загрузки"
            subTitle={error instanceof Error ? error.message : "Загрузить пользователей не удалось"}
            extra={
              <Button type="primary" onClick={() => refetch()}>
                Загрузить повторно
              </Button>
            }
          />
        )}

        {!isLoading && !isError && (
          <>
            <List
              itemLayout="horizontal"
              dataSource={users ?? []}
              renderItem={(user) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={user.avatar} />}
                    title={<Typography.Text strong>{user.name}</Typography.Text>}
                    description={
                      <Typography.Text type="secondary">
                        Зарегистрирован {dayjs(user.createdAt).format("DD.MM.YYYY")}
                      </Typography.Text>
                    }
                  />
                </List.Item>
              )}
            />

            <Footer>
              <Button type="primary" onClick={() => setIsCreateOpen(true)}>
                Создать пользователя
              </Button>
            </Footer>
          </>
        )}
      </Content>

      <CreateUserModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </Page>
  );
}

