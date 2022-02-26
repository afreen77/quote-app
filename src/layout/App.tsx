import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ConversionRate } from "../features/ConversionRate/ConversionRate"
import { Quote } from "../features/NewQuote/Quote"
import { Header } from "./Header"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Quote />} />
        <Route path="/rate/:from/:to/:amount" element={<ConversionRate />} />
      </Routes>
    </BrowserRouter>
  )
}