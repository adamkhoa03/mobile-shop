import type { AxiosResponse } from 'axios';

export class responseWrapper {
  status: number;
  private message: string;
  public data: any;

  constructor(response: AxiosResponse) {
    this.status = response.status;
    this.message = response.statusText;
    this.data = response.data;
  }
}

// Params search interface
export interface paramSearchInterface {
  [key: string]: unknown;
}

export const formatQuery = (params: paramSearchInterface) => {
  const keys = Object.keys(params);
  const values = Object();
  keys.map((k) => {
    const val = params[k];
    if (val) {
      values[k] = val;
    }
  });
  return new URLSearchParams(values).toString();
};
