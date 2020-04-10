import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyNavigation from './Navigation/MaPosteNavigation'

export default function App() {


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
