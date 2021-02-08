import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default class NavStack extends React.Component {
    render () {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        )
    }
}