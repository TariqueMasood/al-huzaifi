import React, { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { Form } from "react-bootstrap";
import styled from "styled-components";

countries.registerLocale(enLocale); // Register the locale (English)

interface CountryListProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryList: React.FC<CountryListProps> = ({ name, value, onChange }) => {
  const [countryList, setCountryList] = useState<
    { code: string; name: string }[]
  >([]);

  useEffect(() => {
    const countryNames = countries.getNames("en", { select: "official" });
    const formattedCountries = Object.entries(countryNames).map(
      ([code, name]) => ({
        code,
        name,
      })
    );
    setCountryList(formattedCountries);
  }, []);

  return (
    <StyledFormGroup controlId="country">
      <Form.Label>Select Country</Form.Label>
      <StyledFormControl
        as="select"
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 rounded"
      >
        <option value="">-- Select --</option>
        {countryList.map(({ code, name }) => (
          <option key={code} value={name}>
            {name}
          </option>
        ))}
      </StyledFormControl>
    </StyledFormGroup>
  );
};

export default CountryList;

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
`;

const StyledFormControl = styled(Form.Control)`
  width: 100%;
`;
