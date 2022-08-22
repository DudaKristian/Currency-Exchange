import { Header } from "components/Header/Header";
import { fetchCurrencies } from "../../API/fetchCurrencies"
import { useState, useEffect } from "react";

export const App = () => {

const [currencies, setCurrencies] = useState("")
  
  useEffect(() => {
    fetchCurrencies(setCurrencies);
  }, [])
  
  

  return (
    <div>
      <Header currencies={currencies} />
    </div>
  );
};
