import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, message } from "antd";
import type { User } from "@/entities";
import { deleteUser, updateUser } from "@/entities";
import { ActionsBar, RightActions } from "./EditUserModal.styles";

type EditUserFormValues = {
  id: string;
  name: string;
  avatar: string;
};

type EditUserModalProps = {
  open: boolean;
  user: User | null;
  onClose: () => void;
};

export function EditUserModal({ open, user, onClose }: EditUserModalProps) {
  const [form] = Form.useForm<EditUserFormValues>();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!open || !user) return;
    form.setFieldsValue({
      id: user.id,
      name: user.name,
      avatar: user.avatar
    });
  }, [open, user, form]);

  const { mutateAsync: saveAsync, isLoading: isSaving } = useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Изменения сохранены");
      onClose();
    },
    onError: (err) => {
      const errorMessage =
        err instanceof Error ? err.message : "Не удалось сохранить изменения";
      message.error(errorMessage);
    }
  });

  const { mutateAsync: deleteAsync, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Пользователь удалён");
      onClose();
    },
    onError: (err) => {
      const errorMessage =
        err instanceof Error ? err.message : "Не удалось удалить пользователя";
      message.error(errorMessage);
    }
  });

  const isBusy = isSaving || isDeleting;

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const handleSave = async () => {
    if (!user) return;
    const values = await form.validateFields();
    await saveAsync({
      id: user.id,
      editedUser: { name: values.name, avatar: values.avatar }
    });
  };

  const handleDelete = async () => {
    if (!user) return;
    await deleteAsync(user.id);
  };

  return (
    <Modal
      title="Редактирование пользователя"
      open={open}
      onCancel={handleCancel}
      closable={!isBusy}
      footer={null}
      centered
      width={620}
      destroyOnHidden
    >
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item label="id" name="id">
          <Input disabled />
        </Form.Item>

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
          rules={[
            { required: true, whitespace: true, message: "Поле не заполнено" },
            { type: "url", message: "Введите корректную ссылку" }
          ]}
        >
          <Input />
        </Form.Item>

        <ActionsBar>
          <Button type="primary" onClick={handleDelete} loading={isDeleting} disabled={isBusy}>
            Удалить
          </Button>

          <RightActions>
            <Button type="primary" onClick={handleSave} loading={isSaving} disabled={isBusy}>
              Сохранить
            </Button>
            <Button type="primary" onClick={handleCancel} disabled={isBusy}>
              Отмена
            </Button>
          </RightActions>
        </ActionsBar>
      </Form>
    </Modal>
  );
}

