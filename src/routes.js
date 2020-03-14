import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
      }}
    >
      <Screen
        name="Main"
        component={Main}
        options={{
          title: 'Usuários',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
      <Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
      <Screen
        name="Repository"
        component={Repository}
        options={({ route }) => ({ title: route.params.repository.name })}
      />
    </Navigator>
  );
}
