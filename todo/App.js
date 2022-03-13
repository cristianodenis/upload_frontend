import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/Views/Home';
import Task from './src/Views/Task';
import Qrcode from './src/Views/Qrcode';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
     <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Home" component={Home}
           options={{headerShown: false}}/>
           <Stack.Screen name="Task" component={Task}
           options={{headerShown: false}}/>
           <Stack.Screen name="Qrcode" component={Qrcode}
           options={{headerShown: false}}/>
        </Stack.Navigator>
     </NavigationContainer>
  );
}