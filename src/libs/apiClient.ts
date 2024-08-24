import { cookies } from "next/headers";
import type {
  FetchOptions,
  FetchRequest,
  MappedResponseType,
  ResponseType,
} from "ofetch";
import { ofetch } from "ofetch";

import { Env } from "@/config/Env";

const apiFetch = ofetch.create({
  // biome-ignore lint/style/useNamingConvention: We have no control of external library
  baseURL: Env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
  async onRequest({ request: _request, options }) {
    // attach token (from cookie) to request headers
    // NOTE: not sure if this works in server-side rendering
    let token: string | undefined;
    if (typeof window !== "undefined") {
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    } else {
      token = cookies().get("token")?.value;
    }
    // eslint-disable-next-line no-param-reassign -- mutate options
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  },
});

type ApiFetchProxyMethod = <T = unknown, R extends ResponseType = "json">(
  request: FetchRequest,
  options?: Omit<FetchOptions<R>, "method">,
) => Promise<MappedResponseType<R, T>>;

const apiClient: { [method: string]: ApiFetchProxyMethod } = {
  get: (request, options) => apiFetch(request, { ...options, method: "GET" }),
  post: (request, options) => apiFetch(request, { ...options, method: "POST" }),
  put: (request, options) => apiFetch(request, { ...options, method: "PUT" }),
  patch: (request, options) =>
    apiFetch(request, { ...options, method: "PATCH" }),
  delete: (request, options) =>
    apiFetch(request, { ...options, method: "DELETE" }),
};

export default apiClient;
