declare module 'react-phone-input-2' {
  import * as React from 'react';
  interface CountryData {
    name: string;
    dialCode: string;
    countryCode: string;
    format: string;
  }
  interface PhoneInputProps {
    country?: string;
    value?: string;
    onChange?: (
      value: string,
      country: CountryData,
      event: React.ChangeEvent<HTMLInputElement>,
      formattedValue: string
    ) => void;
    inputProps?: any;
    inputStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    specialLabel?: string;
    // ...other props as needed
  }
  const PhoneInput: React.FC<PhoneInputProps>;
  export default PhoneInput;
}
