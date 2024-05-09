// Mapped Types
// Mapped Typesは、オブジェクトのプロパティを変換するための型です。

export type CountryCode = "JP" | "US" | "CN";

export type CountryNames = {
  [key in CountryCode]: string;
};

export const countryNames: CountryNames = {
  JP: "Japan",
  US: "United States",
  CN: "China",
};
