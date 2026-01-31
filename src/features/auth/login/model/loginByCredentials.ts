import { AUTH_TOKEN_STORAGE_KEY } from "@/shared/config";
import type { AuthCredentials } from "../api/fakeAuthorize";
import { fakeAuthorize } from "../api/fakeAuthorize";

export async function loginByCredentials(
  credentials: AuthCredentials
): Promise<string> {
  const token = await fakeAuthorize(credentials);
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  return token;
}

