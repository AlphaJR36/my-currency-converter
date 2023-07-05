import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '../services/api/config';
import { formatDate } from './formatDate';
import { parseRates } from './parseRates';

export async function fetchRates(
  currencyFrom: string,
  day?: Date | string
): Promise<any> {
  const formattedDay = formatDate(day);
  const url = `${apiUrl}&currencies=${currencyFrom}`;

  const response: AxiosResponse<any> = await axios.get(url);
  return parseRates(response);
}
