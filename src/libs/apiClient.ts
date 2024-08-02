import { cookies } from 'next/headers';
import type {
  FetchOptions,
  FetchRequest,
  MappedResponseType,
  ResponseType,
} from 'ofetch';
import { ofetch } from 'ofetch';

import { Env } from '@/config/Env';

const apiFetch = ofetch.create({
  baseURL: Env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
  },
  async onRequest({ request: _request, options }) {
    // attach token (from cookie) to request headers
    // NOTE: not sure if this works in server-side rendering
    let token;
    if (typeof window !== 'undefined') {
      token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    } else {
      token = cookies().get('token');
    }
    // eslint-disable-next-line no-param-reassign -- mutate options
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  },
});

type ApiFetchProxyMethod = <T = any, R extends ResponseType = 'json'>(
  request: FetchRequest,
  options?: Omit<FetchOptions<R>, 'method'>,
) => Promise<MappedResponseType<R, T>>;

class ApiClient {
  static get: ApiFetchProxyMethod = (request, options) =>
    apiFetch(request, { ...options, method: 'GET' });

  static post: ApiFetchProxyMethod = (request, options) =>
    apiFetch(request, { ...options, method: 'POST' });

  static put: ApiFetchProxyMethod = (request, options) =>
    apiFetch(request, { ...options, method: 'PUT' });

  static patch: ApiFetchProxyMethod = (request, options) =>
    apiFetch(request, { ...options, method: 'PATCH' });

  static delete: ApiFetchProxyMethod = (request, options) =>
    apiFetch(request, { ...options, method: 'DELETE' });
}

const apiClient = ApiClient;

export default apiClient;
