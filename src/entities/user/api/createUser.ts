import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";
import { USERS_URL } from "./urls";

export type CreateUserInput = {
  name: string;
  avatar: string;
};

export async function createUser(newUser: CreateUserInput): Promise<User> {
  const { data } = await axiosInstance.post<User>(USERS_URL, newUser);
  return data;
}

