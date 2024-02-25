import axios from 'axios';
import { AuthError } from '../errors/AuthError';

const BASE_URL = 'http://37.60.239.85:300/api/v1/';



class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(data) {
    try {
      const { email, password } = data;
      const response = await this.api.post('/users/login', { email, password });

      if (response.data && response.data.code === 200) {
        return response.data.data;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.code === 401) {
        throw new AuthError(error.response.data.message, 401);
      } else {
        throw new AuthError('Servicio no disponible, intentarlo más tarde.', 500);
      }
    }
  }

  async register(data) {
    try {
      const { email, password, name } = data;
      const response = await this.api.post('/users/register', { email, password, name });

      if (response.data && response.data.code === 201) {
        return response.data.message;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.code === 422) {
        throw new AuthError(error.response.data.message, 422);
      } else {
        throw new AuthError('Servicio no disponible, intentarlo más tarde.', 500);
      }
    }
  }
}

export default new AuthService();
