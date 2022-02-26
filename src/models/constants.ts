export const currenyList = [
{ id: "AED", label: "United Arab Emirates Dirham"},
 { id: "AUD",	label: "Australian Dollar"},
 { id: "CAD",	label: "Canadian Dollar"},
 { id: "CHF",	label: "Swiss Franc"},
 { id: "DKK",	label: "Danish Kroner"},
 { id: "EUR",	label: "Euro"},
 { id: "GBP",	label: "Pound Sterling"},
 { id: "HKD",	label: "Hong Kong Dollar"},
 { id: "HUF",	label: "Hungarian Forint"},
 { id: "ILS",	label: "Israeli Shekel"},
 { id: "JPY",	label: "Japanese Yen"},
 { id: "MXN",	label: "Mexican Peso"},
 { id: "NOK",	label: "Norwegian Kroner"},
 { id: "NZD",	label: "New Zealand Dollar"},
 { id: "PLN",	label: "Polish Zloty"},
 { id: "SEK",	label: "Swedish Kroner"},
 { id: "SGD",	label: "Singapore Dollar"},
 { id: "THB",	label: "Thailand Baht"},
 { id: "TRY",	label: "Turkish Lira"},
 { id: "USD", label: "US Dollar"},
 { id: "ZAR",	label: "South African Rand"},
];


export interface QuoteFormModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
};

export interface ConversionRateModel {
  "CustomerRate": number;
  "CustomerRateInverse": number;
  "CustomerAmount": number;
  "InterbankAmount": number;
  "DefaultFee": number;
  "Fee": number;
  "FeeFreeThreshold": number;
  "InterbankRate": number;
  "InverseInterbankRate": number;
  "DeliveryCountry": string;
  "DeliveryTime": number;
  "ComparisonRate": number;
  "ComparisonAmount": number;
  "Message": string;
}

export interface QuoteFormProps {
  handleGetQuote: (data: QuoteFormModel) => void
}