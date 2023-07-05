import { convertCurrency } from './functions/convertCurrency';

export async function convertCurrencyFinal() {
  try {
    const finalCurrency = convertCurrency(100, 'EUR');
    console.log(finalCurrency);
    
  } catch (err) {
    console.error(err);
    
  }
}

convertCurrencyFinal();
