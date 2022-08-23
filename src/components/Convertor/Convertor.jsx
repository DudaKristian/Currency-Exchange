
export const Covertor = ({ currencies }) => {

    const currenciesArr = Object.entries(currencies);

    return (
        <form>
            <label htmlFor="curr1">
                <input type="number" min="0" />
                <select name="curr1" id="curr1">
                    {currenciesArr.map((index) => {
                        return <option value={index[1]} > {index[0]} </option >
                    })}
                </select>
            </label>
            <label htmlFor="curr2">
                <input type="number" min="0"/>
                <select name="curr2" id="curr2">
                    {currenciesArr.map((index) => {
                        return <option value={index[1]} > {index[0]} </option >
                    })}
                </select>
            </label>
        </form>
    )
}