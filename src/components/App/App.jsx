import { useState, useEffect } from "react";
import { Header } from "components/Header/Header";
import { Covertor } from "components/Convertor/Convertor";
import { fetchCurrencies } from "../../API/fetchCurrencies"
import styles from "./app.module.css"


export const App = () => {

const [currencies, setCurrencies] = useState("")
      
  useEffect(() => {
    fetchCurrencies(setCurrencies);
  }, [])
  
  return (
    <div className={styles.app}>
      <Header currencies={currencies} />
      <Covertor currencies={currencies}/>
    </div>
  );
};
