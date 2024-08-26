import createQueryClient from "openapi-react-query";
import { fetchClient } from "./fetchClient";

export const $api = createQueryClient(fetchClient);
