import usa from "../../images/united-states.png"
import eu from "../../images/european-union.png"
import styles from "./header.module.css"

export const Header = ({ currencies }) => {

    const usdValue = (currencies.UAH * currencies.USD).toFixed(2)
    const euroValue = (currencies.UAH * currencies.EUR).toFixed(2)

    return (
        <header>
            <h1 className={styles.header__title}>CURRENCY CONVERTER</h1>
            <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <img src={usa} alt="USA flag" width="20"/>
                    <span className={styles.header__item__value}>
                        {usdValue}UAH
                    </span>
                </li>
                <li className={styles.header__item}>
                    <img src={eu} alt="EU flag" width="20"/>
                    <span className={styles.header__item__value}>
                        {euroValue}UAH
                    </span>
                </li>
            </ul>
    </header>)
}

