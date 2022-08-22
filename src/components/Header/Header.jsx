
export const Header = ({ currencies }) => {

    const usdValue = (currencies.UAH * currencies.USD).toFixed(2)
    const euroValue = (currencies.UAH * currencies.EUR).toFixed(2)

    return (
        <header>
        <ul>
            <li>
                <img src="#" alt="USA flag" />
                    <span>{usdValue}UAH</span>
            </li>
            <li>
                <img src="#" alt="USA flag" />
                    <span>{euroValue}UAH</span>
            </li>
        </ul>
    </header>)
}