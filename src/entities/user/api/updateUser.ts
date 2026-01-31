import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";
import { USERS_URL } from "./urls";

export type UpdateUserInput = {
  name: string;
  avatar: string;
};

export type UpdateUserArgs = {
  id: string;
  editedUser: UpdateUserInput;
};

export async function updateUser({ id, editedUser }: UpdateUserArgs): Promise<User> {
  const { data } = await axiosInstance.put<User>(`${USERS_URL}/${id}`, editedUser);
  return data;
}

