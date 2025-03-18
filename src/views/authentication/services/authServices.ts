import { fakeWrapper } from '@/views/authentication/services/fetchWrapper.ts';
import { api } from '@/views/authentication/services/api.ts';

export class AuthenticationService {
  static async login(credentials: { email: string; password: string }) {
    try {
      return fakeWrapper.post(api.AUTHENTICATOR, credentials);
    } catch (e) {
      console.log(e);
    }
  }
}
