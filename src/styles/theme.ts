import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    themeColor: '#ce7d00',
    secondary: '#1c1c1e',
    white: '#fff',
    textColor: '#333',
    black: '#000'
  },
  
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
}

export default theme;

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
  colors: theme.colors,
  fontSizes: theme.fontSizes,
};

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  colors: theme.colors,
  fontSizes: theme.fontSizes,
};