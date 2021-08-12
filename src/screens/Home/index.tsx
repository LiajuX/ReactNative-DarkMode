import React, { useState } from 'react';

import { useAppTheme } from '../../hooks/appTheme';

import { SwitchComponent } from '../../components/SwitchComponent';

import { Container, Title } from './styles';

export function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const { appTheme, toggleAppTheme } = useAppTheme();

  function handleChangeAppTheme() {
    setIsEnabled(previousState => !previousState);
    toggleAppTheme();
  }

  console.log('##CONSOLE DO APP THEME NA HOME##', appTheme);

  return (
    <Container>
      <Title>Home</Title>

      <SwitchComponent
        isEnabled={isEnabled}
        onValueChange={handleChangeAppTheme}
      />
    </Container>
  );
}
