import React from 'react';

import { useAppTheme } from '../../hooks/appTheme';

import { SwitchComponent } from '../../components/SwitchComponent';

import { Container, Title } from './styles';

export function Home() {
  const { isDarkMode, toggleAppTheme } = useAppTheme();

  return (
    <Container>
      <Title>Home</Title>

      <SwitchComponent
        isEnabled={isDarkMode}
        onValueChange={toggleAppTheme}
      />
    </Container>
  );
}
