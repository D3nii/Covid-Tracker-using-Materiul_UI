import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../API";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleCountrychange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    console.log(countries);

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountrychange(e.target.value)}
      >
        <option value="global">Global</option>
        {countries
          ? countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
