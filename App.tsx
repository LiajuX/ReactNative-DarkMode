import React from 'react';

import { AppThemeProvider } from './src/hooks/appTheme';

import { Routes } from './src/routes';

export default function App() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}
