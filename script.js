// script.js

async function fetchOilPrices() {
    try {
        const response = await fetch('https://api.oilpriceapi.com/v1/prices', {
            headers: {
                'Authorization': 'Bearer YOUR_OIL_PRICE_API_TOKEN'
            }
        });
        const data = await response.json();
        console.log('Live Oil Prices:', data);
    } catch (error) {
        console.error('Error fetching oil prices:', error);
    }
}

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const inrRate = data.rates.INR;
        console.log('Indian Rupee Exchange Rate:', inrRate);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

async function main() {
    await fetchOilPrices();
    await fetchExchangeRates();
}

main();