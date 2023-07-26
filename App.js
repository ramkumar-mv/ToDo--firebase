import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '/Users/ramkumarmv/firebaseTodo/Screens/Home.js';
import Detail from '/Users/ramkumarmv/firebaseTodo/Screens/Detail.js';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}