import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";

const BASIC_URL = "https://697dd02097386252a2691e4f.mockapi.io";
const USERS_URL = `${BASIC_URL}/users`;

export type CreateUserInput = {
  name: string;
  avatar: string;
};

export async function createUser(newUser: CreateUserInput): Promise<User> {
  const { data } = await axiosInstance.post<User>(USERS_URL, newUser);
  return data;
}

