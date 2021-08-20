import * as React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Tracks from '../screens/Tracks';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 100, height: 40}}
      source={require('../imgs/logo.png')}
    />
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#00A347',
            },
          }}
        />
        <Stack.Screen
          name="Tracks"
          component={Tracks}
          options={{title: 'SAAZ'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
