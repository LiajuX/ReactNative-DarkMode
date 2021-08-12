import React, { useState } from 'react';

import { useAppTheme } from '../../hooks/appTheme';

import { SwitchComponent } from '../../components/SwitchComponent';

import { Container, Title } from './styles';

export function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const { toggleAppTheme } = useAppTheme();

  function handleChangeAppTheme() {
    setIsEnabled(previousState => !previousState);
    toggleAppTheme();
  }

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
