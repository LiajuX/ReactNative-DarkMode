import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes'; 
import { useAppTheme } from '../hooks/appTheme';
import { ThemeProvider } from 'styled-components/native';

export function Routes() {
  const { appTheme } = useAppTheme();

  console.log(appTheme)

  return (
    <ThemeProvider theme={appTheme}>
      <NavigationContainer>
        <AppTabRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
