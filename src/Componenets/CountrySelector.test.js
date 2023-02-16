import { render, screen } from "@testing-library/react";
import { CountrySelector } from "./CountrySelector";

it('should correctly set default option',() => {
    render(<CountrySelector/>);
    const defaultOption = screen.getByRole('option',{name:'please select a country'});
    expect(defaultOption.selected).toBe(true);
});

// if("should return country data whene selecting an option", ()=>{

// });

