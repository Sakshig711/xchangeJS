import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_24CTgCO1KDlFKibkiAhtduOvv6zPO85KEURq51Yg');

//convertCurrency("USD", "INR", 3);
export async function convertCurrency(fromCurrency, toCurrency, units)
{
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data [toCurrency];
    return multiplier*units;
}