import { AUTH_TOKEN_STORAGE_KEY } from "@/shared/config";

export function isAuthorized(): boolean {
  return Boolean(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY));
}

