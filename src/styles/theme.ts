import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    // themeColor: "#ce7d00",
    themeColor: "#004353",
    themeColor2: "#e2f0d9",
    activeBg: "#E6F7FF",
    activeTextColor: "#124d63",
    darkBg:"#0D1A36",
    themeTextColor:"#72819F",
    themeTextColor2:"#4f835b",
    themeTextColor3: "#f2f2f2",
    sidebarBackground: "#004353",
    headerBackground: "#006778",
    footerBackground: "#00343d",
  },
};

export default theme;

export const lightTheme: DefaultTheme = {
  background: "#fff",
  secondaryBg: "#f2f2f2",
  text: "#434343",
  toggleBorder: "#f3f3f3",
  colors: {
    ...theme.colors,
    sidebarBackground: "#f8f9fa",
    headerBackground: "#e9ecef",
    footerBackground: "#dee2e6",
  },
  boxShadow: "0px 3px 6px 0px rgba(140, 149, 159, 0.15)",
  border:"none",
  cardDividerColor: "#f5f5f5", 
};

export const darkTheme: DefaultTheme = {
  background: "#242831",
  secondaryBg: "#333944",
  text: "#798087",
  toggleBorder: "#394051",
  colors: {
    ...theme.colors,
    sidebarBackground: "#1c1f26",
    headerBackground: "#2c3038",
    footerBackground: "#1a1d23",
  },
  boxShadow: "none",
  border:"1px solid #434343",
  cardDividerColor: "#434343",
};
