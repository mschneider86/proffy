import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import TeachClasses from '../pages/TeachClasses';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen name='TeachClasses' component={TeachClasses} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
