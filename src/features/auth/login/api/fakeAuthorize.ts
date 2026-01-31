export type AuthCredentials = {
  login: string;
  password: string;
};

export function fakeAuthorize(
  credentials: AuthCredentials
): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid =
        credentials.login === "admin" && credentials.password === "admin";

      if (!isValid) {
        reject(new Error("Неверный логин и / или пароль"));
        return;
      }

      resolve("authorized");
    }, 2000);
  });
}

