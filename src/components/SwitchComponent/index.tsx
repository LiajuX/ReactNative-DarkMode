import React from 'react';
import { Switch, SwitchProps } from 'react-native';

import { useAppTheme } from '../../hooks/appTheme';

interface Props extends SwitchProps {
  isEnabled: boolean;
}

export function SwitchComponent({ isEnabled, ...rest }: Props) {
  const { isDarkMode } = useAppTheme();

  const enabledTrackColor = isDarkMode ? '#1D1D1D' : '#D0D0D0';
  const disabledTrackColor = isDarkMode ? '#1D1D1D' : '#D0D0D0';
  const enabledThumbColor = isDarkMode ? '#C87BF4' : '#641E8C';
  const disabledThumbColor = isDarkMode ? '#4E4E4E' : '#EBEBEB';

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
