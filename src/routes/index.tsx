import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes'; 
import { useAppTheme } from '../hooks/appTheme';

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
