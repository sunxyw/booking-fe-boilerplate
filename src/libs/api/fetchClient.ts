import createFetchClient from "openapi-fetch";

import { Env } from "@/config/Env";
import type { paths } from "@/types/api-types";
import { applyMiddlewaresToFetchClient } from "./middlewares";

const fetchClient = createFetchClient<paths>({
  baseUrl: Env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
  },
});
applyMiddlewaresToFetchClient(fetchClient);

export { fetchClient };
