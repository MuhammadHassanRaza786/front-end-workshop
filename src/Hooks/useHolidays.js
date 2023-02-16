import { useState, useEffect, useMemo } from "react";

export const useHolidays = (country) => {
    const [holidays, setHolidays] = useState([]);

    // const getHolidays = useCallback(()=>{})
    useEffect(() => {
        async function loadDAta() {
            const url = `https://date.nager.at/api/v3/publicholidays/2023/${country.code}`;
            const response = await fetch(url);
            if (response.status === 204){
                setHolidays([]);
                return;
            }
            const data = await response.json();
            setHolidays(data);
            // console.log(data);
        }
        if (country !== null) {
            loadDAta();
        }
    }, [country]);

    return useMemo(() => {
        return {
            holidays
        };
    }, [holidays]);
};