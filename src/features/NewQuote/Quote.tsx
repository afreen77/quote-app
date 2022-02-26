import { QuoteForm } from "./QuoteForm";
import { useNavigate } from "react-router-dom";
import { QuoteFormModel } from "../../models/constants";

export const Quote = () => {
  const navigate = useNavigate();

  const handleCurrencyChange = (data: QuoteFormModel) => {
    if (data.amount && data.fromCurrency && data.toCurrency) {
      navigate(`/rate/${data.fromCurrency}/${data.toCurrency}/${data.amount}`);
    }
  }
  return (
    <QuoteForm handleGetQuote={handleCurrencyChange} />
  )
}