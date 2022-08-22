import { Header } from "components/Header/Header";
import { fetchCurrencies } from "../../API/fetchCurrencies"
import { useState, useEffect } from "react";
import { Covertor } from "components/Convertor/Convertor";

export const App = () => {

const [currencies, setCurrencies] = useState("")
  
  useEffect(() => {
    fetchCurrencies(setCurrencies);
  }, [])
  
  return (
    <div>
      <Header currencies={currencies} />
      <Covertor currencies={currencies}/>
    </div>
  );
};
