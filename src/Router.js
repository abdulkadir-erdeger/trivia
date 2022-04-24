import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Selection from './pages/Selection';
import Quiz from './pages/Quiz';
import ScoreProvider from './context';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <ScoreProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#607d8c',
            },
          }}>
          <Stack.Screen
            name="HomePage"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SelectionPage"
            component={Selection}
            options={{
              title: 'Selection',
            }}
          />
          <Stack.Screen
            name="QuizPage"
            component={Quiz}
            options={{headerBackVisible: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScoreProvider>
  );
}
