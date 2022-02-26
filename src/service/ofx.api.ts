
export const fetchQuote = async (from: string, to: string, amount: number) => {
  if (to && from && amount) {
    const response = await fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${from}/${to}/${amount}?format=json`);
    return await response.json();
  }
}