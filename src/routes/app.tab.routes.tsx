import React from 'react';
import { useTheme } from 'styled-components';
import { Foundation, Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary80,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 24,
          left: '5%',
          width: '90%',
          height: 79,
          borderTopWidth: 0,
          borderRadius: 15,
          elevation: 0,
          backgroundColor: theme.colors.shape,
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Foundation
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name="ios-settings-sharp"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  );
}
