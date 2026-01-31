import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, message } from "antd";
import { createUser } from "@/entities";
import { Actions } from "./CreateUserModal.styles";

type CreateUserFormValues = {
  name: string;
  avatar: string;
};

type CreateUserModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CreateUserModal({ open, onClose }: CreateUserModalProps) {
  const [form] = Form.useForm<CreateUserFormValues>();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Пользователь создан");
      onClose();
      form.resetFields();
    },
    onError: (err) => {
      const errorMessage =
        err instanceof Error ? err.message : "Ошибка создания пользователя";
      message.error(errorMessage);
    }
  });

  const onCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = async (values: CreateUserFormValues) => {
    await mutateAsync(values);
  }

  return (
    <Modal
      title="Создание пользователя"
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={620}
      destroyOnHidden
    >
      <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, whitespace: true, message: "Поле не заполнено" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ссылка на аватарку"
          name="avatar"
          rules={[{ required: true, whitespace: true, message: "Поле не заполнено" }]}
        >
          <Input />
        </Form.Item>

        <Actions>
          <Button type="primary" htmlType='submit' loading={isLoading}>
            Создать
          </Button>
          <Button type="primary" onClick={onCancel} disabled={isLoading}>
            Отмена
          </Button>
        </Actions>
      </Form>
    </Modal>
  );
}

