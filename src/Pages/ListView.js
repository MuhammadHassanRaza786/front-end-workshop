import { useEffect, useState } from "react";
import { CountrySelector } from "../Componenets/CountrySelector";
import { Flag } from "../Componenets/Flag";
import { Panel } from "../Componenets/Panel";
import { useHolidays } from "../Hooks/useHolidays";
import styles from "./list.module.css"
// import styles from './panel.module.css'

export const ListView = () => {


    const [country, setCountry] = useState(null);
    // code:'AT',
    // name: 'Austria'  
    const { holidays } = useHolidays(country);

    return <div>
        <CountrySelector onChange={(value) => setCountry(value)} />
        {country === null ?
         <Panel>Please select a country</Panel> :
            <>
                <div>
                    <h2>{country.name}</h2>
                    <Flag countryCode={country.code} >
                    </Flag>
                </div>
                {holidays.length > 0 ? holidays.map(holiday => (
                    <Panel>
                        <p>Name: {holiday.name}</p>
                        <p>Local Name: {holiday.localName}</p>
                        <p>Date: {holiday.date}</p>
                    </Panel>
                )) :
                    <Panel className={styles.error}>No Data to show for {country.name}</Panel>}
            </>
        }
    </div>;
};
