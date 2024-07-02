import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    themeColor: "#ce7d00",
    activeBg: "#E6F7FF",
    activeTextColor: "#124d63",
    darkBg:"#0D1A36",
    themeTextColor:"#72819F",
  },
};

export default theme;

export const lightTheme: DefaultTheme = {
  background: "#fff",
  secondaryBg: "#f2f2f2",
  text: "#434343",
  toggleBorder: "#f3f3f3",
  colors: theme.colors,
  boxShadow: "0px 3px 6px 0px rgba(140, 149, 159, 0.15)",
};

export const darkTheme: DefaultTheme = {
  background: "#242831",
  secondaryBg: "#333944",
  text: "#798087",
  toggleBorder: "#394051",
  colors: theme.colors,
  boxShadow: "none",
};
