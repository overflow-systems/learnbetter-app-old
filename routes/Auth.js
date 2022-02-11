import { Text } from "react-native";

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Login from '../views/auth/Login';

const Stack = createNativeStackNavigator();

export default function Auth () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="auth.login">
        <Stack.Screen
          name="auth.login"
          component={Login}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}