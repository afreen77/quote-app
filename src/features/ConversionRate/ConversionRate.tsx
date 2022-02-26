import { FC, useEffect, useState } from "react"
import { formatValue } from "react-currency-input-field";
import { useNavigate, useParams } from "react-router";
import { ConversionRateModel } from "../../models/constants";
import { fetchQuote } from "../../service/ofx.api";

export const ConversionRate: FC<any> = () => {
  const { from, to, amount } = useParams();
  const [conversionRate, setConversionRate] = useState<ConversionRateModel>();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (to && from && amount) {
      fetchQuote(from, to, +amount)
        .then(x => {
          setConversionRate(x);
        })
        .catch(err => {
          setError(true);
          console.error(err);
        })
    }
    return () => setError(false);
  }, [to, from, amount]);

  const formattedCurreny = (currency: string | undefined) => {
    return formatValue({
      value: currency || '0',
      groupSeparator: ',',
      decimalSeparator: '.',
      decimalScale: 2,
    });
  };

  return (!error ?
    <div className="container-md m-2">
      <div className="card">
        <div className="card border justify-content-start border-0">
          <div className="card-body">
            <h4 className="card-title">OFX Customer Rate</h4>
            <p className="card-text" style={{ color: "#52B38E", fontSize: "2.5rem", fontWeight: "400", paddingLeft: "1em" }}>{conversionRate?.CustomerRate}</p>

            <h4 className="card-title">From</h4>
            <h3 className="display-6">
              {from}
              <span className="inline mx-3" style={{ color: "#62A1C2", fontSize: "2rem", fontWeight: "400" }}>{formattedCurreny(amount)}</span>
            </h3>

            <h4 className="card-title">To</h4>
            <h3 className="display-6">
              {to}
              <span className="inline mx-3" style={{ color: "#62A1C2", fontSize: "2rem", fontWeight: "400" }}>{formattedCurreny(conversionRate?.CustomerAmount?.toString())}</span>
            </h3>

          </div>

          <div className="d-flex justify-content-center m-4">
            <button className="btn btn-primary btn-rounded" type="button" onClick={() => navigate('/')}>START NEW QUOTE</button>
          </div>
        </div>
      </div >
    </div>
    : <h2 className="text-danger">Something went wrong, Please check developer console for error</h2>
  )
}