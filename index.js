// Function to convert currency
function convertCurrency() {
    // Get the amount to convert, and the currencies to convert from and to
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    // Define conversion rates in an object
    var conversionRates = {
        // Conversion rates for USD
        USD: {
            EUR: 0.85,
            GBP: 0.72,
            JPY: 109.45,
            AUD: 1.29,
            CAD: 1.21,
            CHF: 0.91,
            CNY: 6.48,
            HKD: 7.77,
            INR: 74.91
        },
        // Conversion rates for EUR
        EUR: {
            USD: 1.18,
            GBP: 0.85,
            JPY: 129.87,
            AUD: 1.53,
            CAD: 1.44,
            CHF: 1.08,
            CNY: 7.69,
            HKD: 9.21,
            INR: 89.14
        },
        // Conversion rates for GBP
        GBP: {
            USD: 1.39,
            EUR: 1.17,
            JPY: 152.19,
            AUD: 1.79,
            CAD: 1.68,
            CHF: 1.26,
            CNY: 8.95,
            HKD: 10.72,
            INR: 103.76
        },
        // Conversion rates for JPY
        JPY: {
            USD: 0.0091,
            EUR: 0.0077,
            GBP: 0.0066,
            AUD: 0.011,
            CAD: 0.0103,
            CHF: 0.0078,
            CNY: 0.0555,
            HKD: 0.0665,
            INR: 0.6428
        },
        // Conversion rates for AUD
        AUD: {
            USD: 0.78,
            EUR: 0.65,
            GBP: 0.56,
            JPY: 90.81,
            CAD: 0.94,
            CHF: 0.71,
            CNY: 5.05,
            HKD: 6.05,
            INR: 58.53
        },
        // Conversion rates for CAD
        CAD: {
            USD: 0.83,
            EUR: 0.70,
            GBP: 0.60,
            JPY: 97.23,
            AUD: 1.07,
            CHF: 0.75,
            CNY: 5.34,
            HKD: 6.39,
            INR: 61.78
        },
        // Conversion rates for CHF
        CHF: {
            USD: 1.10,
            EUR: 0.93,
            GBP: 0.79,
            JPY: 128.49,
            AUD: 1.41,
            CAD: 1.33,
            CNY: 7.10,
            HKD: 8.51,
            INR: 82.33
        },
        // Conversion rates for CNY
        CNY: {
            USD: 0.15,
            EUR: 0.13,
            GBP: 0.11,
            JPY: 18.01,
            AUD: 0.20,
            CAD: 0.19,
            CHF: 0.14,
            HKD: 1.20,
            INR: 11.62
        },
        // Conversion rates for HKD
        HKD: {
            USD: 0.13,
            EUR: 0.11,
            GBP: 0.093,
            JPY: 15.04,
            AUD: 0.17,
            CAD: 0.16,
            CHF: 0.12,
            CNY: 0.83,
            INR: 9.69
        },
        // Conversion rates for INR
        INR: {
            USD: 0.013,
            EUR: 0.011,
            GBP: 0.0096,
            JPY: 1.56,
            AUD: 0.017,
            CAD: 0.016,
            CHF: 0.012,
            CNY: 0.086,
            HKD: 0.103
        }
    };

    // Retrieve conversion rate from the object based on fromCurrency and toCurrency
    var rate = conversionRates[fromCurrency][toCurrency];

    // Check if the conversion rate is available
    if (rate !== undefined) {
        // If rate is available, calculate the converted amount and display it
        var convertedAmount = (amount * rate).toFixed(2);
        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        // If rate is not available, display an error message
        document.getElementById("result").innerHTML = "Error: Conversion rate not available.";
    }
}
