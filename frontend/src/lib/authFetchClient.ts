import AuthService from "./auth";
import { TokenNotInitializedError } from "./exception";

type RequestParameters = Omit<
  Parameters<typeof fetch>[1],
  "method" | "body" | "headers" | "mode" | "credentials"
>;

export const AuthFetchClient = {
  postJson: (
    path: string,
    json: Object,
    headers: Record<string, string> = {},
    requestParameters?: RequestParameters,
  ): Promise<Response> => {
    const token = AuthService.sessionToken();
    if (token === null) {
      throw new TokenNotInitializedError();
    }
    return fetch(path, {
      ...requestParameters,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(json),
      mode: "cors",
      credentials: "same-origin",
    });
  },
};
