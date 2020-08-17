import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Container } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchCountries } from "../../api";

const Country = ({ handleClickCountry }) => {
  const [fetchedCountries, setFecthedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFecthedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFecthedCountries]);

  return (
    <div className={styles.container}>
      <Container>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleClickCountry(e.target.value)}
          >
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Container>
    </div>
  );
};

export default Country;
