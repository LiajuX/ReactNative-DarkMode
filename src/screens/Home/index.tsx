import React from 'react';

import { useAppTheme } from '../../hooks/appTheme';

import { Container, Title } from './styles';

export function Home() {
  const { appTheme } = useAppTheme();

  console.log('##CONSOLE DO APP THEME NA HOME##', appTheme);

  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}
