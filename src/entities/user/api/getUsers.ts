import { axiosInstance } from "@/shared/api";
import type { User } from "../model/types";

const BASIC_URL = "https://697dd02097386252a2691e4f.mockapi.io";
const USERS_URL = `${BASIC_URL}/users`;

export async function getUsers(): Promise<User[]> {
  const { data } = await axiosInstance.get<User[]>(USERS_URL);
  return data;
}

