interface options {
  method: string;
  headers?: Record<string, string>;
  body?: string;
}

interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

function request(method: string) {
  return async (url: string, body?: object) => {
    const requestInit: options = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    if (body) {
      requestInit.body = JSON.stringify(body);
    }
    return fetch(url, requestInit).then(handleResponse);
  };
}

async function handleResponse(response: Response): Promise<UserData> {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error: string = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data as UserData;
  });
}

export const fakeWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};
