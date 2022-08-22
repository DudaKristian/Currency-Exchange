import { KEY } from "./KEY";


export const fetchCurrencies = async (hook) => {

    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    try {
        await fetch(`https://api.fastforex.io/fetch-all?api_key=${KEY}`, options)
        .then(response => response.json())
        .then(response => hook([...response.results]))
    } catch (err) {
        console.error(err)
    }
}