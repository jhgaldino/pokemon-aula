import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Pages/Main';
import Details from './Pages/Details';

export default function Routes(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
            
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>

            </Stack.Navigator>
        </NavigationContainer>
    );

}
