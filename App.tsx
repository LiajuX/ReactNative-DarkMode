import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import { AppThemeProvider, useAppTheme } from './src/hooks/appTheme';

import { Routes } from './src/routes';

import { Header } from './src/components/Header';

import { dark, light } from './src/global/styles/theme';

export default function App() {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  // Variável que queria usar
  const { appTheme } = useAppTheme();
  console.log('##CONSOLE DO APP THEME NO App.tsx##', appTheme)

  function toggleTheme() {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }

  return (
    <AppThemeProvider>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </ThemeProvider>
    </AppThemeProvider>
  );
}
