import { useCallback } from "react";
import { countryCodes } from "../Data/countryCodes";
import styles from "./Selector.module.css";
export const CountrySelector=({onChange})=>{

    const handleCountryChange = useCallback((event)=>{
        const value = event.target.value;
        const countryData = countryCodes.find(x => x.code === value);
        onChange(countryData);
    },[onChange]);

    return <select className={styles.selector} onChange={handleCountryChange}>
        {countryCodes.map(country =>{
            return <option  value={country.code}>{country.name}</option>
        })}
</select>
}