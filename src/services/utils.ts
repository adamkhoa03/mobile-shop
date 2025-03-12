import type { AxiosResponse } from 'axios';

export class responseWrapper {
  status: number;
  private message: string;
  public data: Array<any>;

  constructor(response: AxiosResponse) {
    this.status = response.status;
    this.message = response.statusText;
    this.data = response.data;
  }
}
