import {AxiosRequestConfig} from 'axios';

export const FMSAApiConfig = (): AxiosRequestConfig => {
  return {
    baseURL: 'https://6222994f666291106a29f999.mockapi.io',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};
