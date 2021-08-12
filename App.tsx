import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AppThemeProvider, useAppTheme } from './src/hooks/appTheme';

import { Routes } from './src/routes';

import { light, dark } from './src/global/styles/theme';

export default function App() {
  const { isDarkMode } = useAppTheme();

  const theme = isDarkMode ? dark : light;

  return (
    <AppThemeProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AppThemeProvider>
  );
}
