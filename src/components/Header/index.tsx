import React, { useState } from 'react';

import { useAppTheme } from '../../hooks/appTheme';

import { SwitchComponent } from '../SwitchComponent';

import {
  Container
} from './styles';

interface Props {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);

  function handleChangeAppTheme() {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  }

  return (
    <Container>
      <SwitchComponent
        isEnabled={isEnabled}
        onValueChange={handleChangeAppTheme}
      />
    </Container>
  );
}
