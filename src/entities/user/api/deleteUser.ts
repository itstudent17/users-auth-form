import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";
import { USERS_URL } from "./urls";


export async function deleteUser(id: string): Promise<User> {
  const { data } = await axiosInstance.delete<User>(`${USERS_URL}/${id}`);
  return data;
}

