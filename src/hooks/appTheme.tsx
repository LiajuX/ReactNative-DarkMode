import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState
} from 'react';

import { DefaultTheme } from 'styled-components/native';

import { light, dark } from '../global/styles/theme';

interface AppThemeProviderProps {
  children: ReactNode;
}


interface AppThemeData {
  appTheme: DefaultTheme;
  toggleAppTheme: () => void;
}

const AppThemeContext = createContext({} as AppThemeData);

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [appTheme, setAppTheme] = useState<DefaultTheme>(light);

  function toggleAppTheme() {
    if (appTheme === light) {
      setAppTheme(dark);
    } else {
      setAppTheme(light);
    }
  }

  return (
    <AppThemeContext.Provider value={{ 
      appTheme,
      toggleAppTheme,
    }}>
      { children }
    </AppThemeContext.Provider>
  );
}

function useAppTheme() {
  const context = useContext(AppThemeContext);

  return context;
}

export { AppThemeProvider, useAppTheme };