import axios, { AxiosResponse } from 'axios';

export function parseRates(response: AxiosResponse<any>): any {
  return response.data;
}
