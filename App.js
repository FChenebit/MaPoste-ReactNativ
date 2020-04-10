/*import React from 'react';
import {NavigationContainer } from '@react-navigation/native'


import MaPosteNavigation from './Navigation/MaPosteNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <MaPosteNavigation/>
    </NavigationContainer>
  );
}
*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import MyStack from './Navigation/MaPosteNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
