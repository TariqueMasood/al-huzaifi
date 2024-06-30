import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    themeColor: "#ce7d00",
    activeBg: "#E6F7FF",
    activeTextColor: "#124d63",
  },
};

export default theme;

export const lightTheme: DefaultTheme = {
  background: "#fff",
  secondaryBg: "#f2f2f2",
  text: "#434343",
  toggleBorder: "#f3f3f3",
  colors: theme.colors,
};

export const darkTheme: DefaultTheme = {
  background: "#242831",
  secondaryBg: "#333944",
  text: "#798087",
  toggleBorder: "#394051",
  colors: theme.colors,
};
