import type { Client, Middleware } from "openapi-fetch";
import { logger } from "../logger";

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    // attach token (from cookie) to request headers
    // NOTE: not sure if this works in server-side rendering
    let token: string | undefined;
    if (typeof window !== "undefined") {
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    } else {
      token = undefined;
    }
    // TODO: refresh token if expired
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }
    return undefined;
  },
};

const logMiddleware: Middleware = {
  async onRequest({ request }) {
    logger.info(request.url);
    return undefined;
  },
  async onResponse({ response }) {
    logger.info(response.status);
    return undefined;
  },
};

export const applyMiddlewaresToFetchClient = (
  fetchClient: Client<never, never>,
) => {
  fetchClient.use(authMiddleware);
  fetchClient.use(logMiddleware);
};
