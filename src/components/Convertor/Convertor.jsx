
export const Covertor = ({ currencies }) => {

    const onInputChange = () => {
        currencies.includes("USD") => {
            console.log(currencies)
        }
    }


    return (
        <form>
            <label htmlFor="curr1">
                <input type="number" min="0" onChange={onInputChange}/>
                <select name="curr1" id="curr1">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                    <option value="GBR">GBR</option>
                </select>
            </label>
            <label htmlFor="curr2">
                <input type="number" min="0"/>
                <select name="curr2" id="curr2">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                    <option value="GBR">GBR</option>
                </select>
            </label>
        </form>
    )
}