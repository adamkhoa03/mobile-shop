export { fakeBackend };

interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface ResponseBody {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

//Fake backend using interceptor and Fetch
function fakeBackend() {
  const users = [
    {
      id: 1,
      email: 'admin@gmail.com',
      password: 'admin123',
      firstName: 'Mobile Shop',
      lastName: 'Admin'
    }
  ];

  window.fetch = function (url: string, opts: { method: string; headers: { [key: string]: string }; body?: string }) {
    return new Promise<Response>((resolve) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/authenticate') && opts.method === 'POST':
            return authenticate();
          case url.endsWith('/users') && opts.method === 'GET':
            return getUsers();
        }
      }

      // route functions
      function authenticate() {
        const { email, password } = body();
        const user = users.find((x) => x.email === email && x.password === password);
        if (!user) return error('email or password is incorrect');
        return ok({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token'
        });
      }

      function getUsers() {
        if (!isAuthenticated()) return unauthorized();
        return ok(users);
      }

      // helper functions
      function ok(body: User[] | ResponseBody): void {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) } as Response);
      }

      function unauthorized() {
        resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) } as Response);
      }

      function error(message: string) {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) } as Response);
      }

      function isAuthenticated() {
        return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }
    });
  } as typeof window.fetch;
}
