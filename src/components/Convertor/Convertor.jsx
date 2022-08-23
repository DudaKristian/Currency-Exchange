import { useState, useEffect } from "react";
import styles from "./convertor.module.css"

export const Covertor = ({ currencies }) => {

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [select1, setSelect1] = useState(null)
    const [select2, setSelect2] = useState(null)

    const currenciesArr = Object.entries(currencies);

    const handleFormChange = e => {
        const evt = e.currentTarget;

        switch (evt.name) {
            case "input1":
                setInput1(evt.value)
                break;
            case "input2":
                setInput2(evt.value)
                break;
            case "curr1":
                setSelect1(evt.value)
                break;
            case "curr2":
                setSelect2(evt.value)
                break;
            default:
                return
        }
    }

    const inputToggle = () => {
        if (select1  && select2) {
            return false
        }
        return true
    }

    const placeholderToggle = () => {
        if (select1 && select2) {
        return "please input value"
    }
    return "please choose a currency"
    }

    useEffect(() => {
        
        const input1Select = document.getElementById('1')
        const input2Select = document.getElementById('2')
        
        if (document.activeElement === input1Select) {
            setInput2((select2 / select1 * input1).toFixed(2))
            return
        } if (document.activeElement === input2Select) {
            setInput1((select1 / select2 * input2).toFixed(2))
            return
        }

        
    },[input1, input2, select1, select2]);


    return (
        <form className={styles.form}>
            <label htmlFor="curr1" className={styles.form__label}>
                <input
                className={styles.input}
                id = "1"
                type="number"
                min="0"
                name="input1"
                value={input1}
                onChange={handleFormChange}
                placeholder={placeholderToggle()}
                disabled={inputToggle()}
                />
                <select
                    name="curr1"
                    id="curr1"
                    defaultValue=""
                    onChange={handleFormChange}>
                    <option value="" disabled hidden>Choose here</option>
                    {currenciesArr.map((index) => {
                        return <option key={index} value={index[1]} > {index[0]} </option >
                    })}
                </select>
            </label>
            <label htmlFor="curr2" className={styles.form__label}>
                    <input
                    className={styles.input}    
                    id = "2"
                    value={input2}
                    name="input2"
                    type="number"
                    min="0"
                    disabled={inputToggle()}
                    onChange={handleFormChange}
                    placeholder={placeholderToggle()}
                />
                <select
                    name="curr2"
                    id="curr2"
                    defaultValue=""
                    onChange={handleFormChange}
                >
                    <option value="" disabled hidden>Choose here</option>
                    {currenciesArr.map((index) => {
                        return <option key={index} value={index[1]} > {index[0]} </option >
                    })}
                </select>
            </label>
        </form>
    )
}