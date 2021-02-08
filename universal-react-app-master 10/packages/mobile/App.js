import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from './stack/NavStack';


export default function App() {
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  );
}

