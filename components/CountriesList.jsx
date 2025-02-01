import React, { useEffect, useState } from "react";
//import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
const [CountriesData, setCountriesData] = useState([]);

//const[filteredData, setQuery]=useFilter();
  

useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((err) => console.log(err));
}, []);

  return (
    <>
      {!CountriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {CountriesData.filter((c) =>
            c.name.common.toLowerCase().includes(query) ||c.region.toLowerCase().includes(query) 
          ).map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default CountriesList;
