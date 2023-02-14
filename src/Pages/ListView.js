import {  useEffect, useState } from "react";
import { CountrySelector } from "../Componenets/CountrySelector";
import { Flag } from "../Componenets/Flag";
import { Panel } from "../Componenets/Panel";
import styles from "./list.module.css"
// import styles from './panel.module.css'

export const ListView = () => {


    const [country, setCountry] = useState({
        code:'AT',
        name: 'Austria'
    });
    const [holidays, setHolidays] = useState([]);

    // const getHolidays = useCallback(()=>{})
    useEffect(() => {
        async function loadDAta() {
            const url = `https://date.nager.at/api/v3/publicholidays/2023/${country.code}`;
            const response = await fetch(url);
            const data = await response.json();
            setHolidays(data);
            // console.log(data);
        }
        loadDAta();
        
    }, [country]);


    return <div>
        <CountrySelector onChange={(value) => setCountry(value)}></CountrySelector>
        <div>
            <h2>{country.name}</h2>
            <Flag countryCode={country.code}> </Flag>
        </div>        
            {holidays.map(holiday => (
                <Panel>
                    <div className={styles.details}>
                    <p>Name:{holiday.name}</p>
                    <p>Local Name:{holiday.localName}</p>
                    <p>Date:{holiday.date}</p>
                    </div>
                </Panel>
            ))} 
    </div>;

};
