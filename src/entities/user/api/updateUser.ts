import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";

const BASIC_URL = "https://697dd02097386252a2691e4f.mockapi.io";
const USERS_URL = `${BASIC_URL}/users`;

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

