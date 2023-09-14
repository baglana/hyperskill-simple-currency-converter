let usd = {
  name: "USD",
  rates: {
    usd: 1,
    jpy: 113.5,
    eur: 0.89,
    rub: 74.36,
    gbp: 0.75
  }
}

greet();
listRates(usd);

function greet() {
  console.log("Welcome to Currency Converter!");
}

function listRates(currency) {
  for (const rate in currency.rates) {
    console.log(`1 ${currency.name} equals`,
      `${currency.rates[rate]} ${rate.toUpperCase()}`);
  }
}