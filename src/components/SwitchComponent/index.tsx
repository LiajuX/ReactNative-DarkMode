import React from 'react';
import { Switch, SwitchProps } from 'react-native';
import { useTheme } from 'styled-components';

import { useAppTheme } from '../../hooks/appTheme';

interface Props extends SwitchProps {
  isEnabled: boolean;
}

export function SwitchComponent({ isEnabled, ...rest }: Props) {
  const theme = useTheme();

  const enabledTrackColor = theme.colors.primary50;
  const disabledTrackColor = theme.colors.primary50;
  const enabledThumbColor = theme.colors.secondary;
  const disabledThumbColor = theme.colors.switch_off;

  return (
    <Switch
      trackColor={{ false: disabledTrackColor, true: enabledTrackColor}}
      thumbColor={isEnabled ? enabledThumbColor : disabledThumbColor}
      ios_backgroundColor="#D0D0D0"
      value={isEnabled}
      {...rest}
    />
  );
}
