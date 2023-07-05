import dotenv from 'dotenv';
dotenv.config();

export const apiUrl = 'https://api.freecurrencyapi.com/v1/latest?apikey=' + process.env.API_KEY;
