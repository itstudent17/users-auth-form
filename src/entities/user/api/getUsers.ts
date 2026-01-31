import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";
import { USERS_URL } from "./urls";

export async function getUsers(): Promise<User[]> {
  const { data } = await axiosInstance.get<User[]>(USERS_URL);
  return data;
}

