import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState
} from 'react';

interface AppThemeProviderProps {
  children: ReactNode;
}


interface AppThemeData {
  isDarkMode: boolean;
  toggleAppTheme: () => void;
}

const AppThemeContext = createContext({} as AppThemeData);

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleAppTheme() {
    setIsDarkMode(previousState => !previousState);
  }

  return (
    <AppThemeContext.Provider value={{ 
      isDarkMode,
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