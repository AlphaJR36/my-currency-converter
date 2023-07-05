import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '../services/api/config';

export function convertCurrency(value: number, currencyTo: string): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    axios
      .get(apiUrl)
      .then((response: AxiosResponse<any>) => {
        const exchangeRates = response.data.data;

        if (typeof value !== 'number' || isNaN(value)) {
          reject(new Error('Invalid value to convert.'));
        } else if (!exchangeRates || !(currencyTo in exchangeRates)) {
          reject(new Error('Invalid currency to convert.'));
        }

        const rateTo = exchangeRates[currencyTo];
        const convertedValue = value * rateTo;

        resolve(convertedValue);
      })
      .catch((error: Error) => reject(error));
  });
}
