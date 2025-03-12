import { app } from '@/config.ts';
import { responseWrapper } from '@/services/utils.ts';
import axios, { type AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: app.api.url,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 100000
});

export class BaseServices {
  static request(status: { auth: boolean; token: string } = { auth: false, token: '' }) {
    if (!window.navigator.onLine) {
      const error = Object();
      error.response = {
        data: {
          status: 503,
          message: 'Unable to connect to the server. Please try again later.',
          timestamp: Date.now()
        }
      };
    }
    if (status.auth && status.token) {
      instance.defaults.headers.Authorization = `Bearer ${status.token}`;
    } else {
      delete instance.defaults.headers.Authorization;
    }
    return instance;
  }

  static handleError(error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }

  /**
   * Handle response wrapper when call api success
   * @param response
   */
  static handleSuccess(response: AxiosResponse) {
    return new responseWrapper(response);
  }
}
