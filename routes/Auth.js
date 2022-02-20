import { Text, Button, Image } from "react-native";

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import HeaderBack from '../components/HeaderBack';

import Login from '../views/auth/Login';

import Forgot from '../views/auth/ForgotPassword/Forgot';

import CreateIntro from '../views/auth/CreateAccount/Intro';
import MentorIntro from '../views/auth/CreateAccount/MentorIntro';
import MenteeIntro from '../views/auth/CreateAccount/MenteeIntro';
import CreateForm from '../views/auth/CreateAccount/Form';
import CreateFinish from '../views/auth/CreateAccount/Finish';

const Stack = createNativeStackNavigator();

import {
  useFonts,
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from '@expo-google-fonts/source-sans-pro';

const createHeaderOptions = {
  title: "Criar Conta",
  headerTitleStyle: {
    color: "#A6A9C6",
    fontSize: 18,
    fontFamily: 'SourceSansPro_700Bold'
  },
  headerStyle: {
    backgroundColor: '#3C3E4D',
  },
  headerLeft: () => (<HeaderBack />)
}

export default function Auth () {
  let [fontsLoaded] = useFonts({
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth.login">
        <Stack.Screen
          name="auth.login"
          component={Login}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="auth.forgot"
          component={Forgot}
          options={{ headerShown: false }}
          />

        <Stack.Screen
          name="auth.create.intro"
          component={CreateIntro}
          options={createHeaderOptions}
          />

        <Stack.Screen
          name="auth.create.intro.mentor"
          component={MentorIntro}
          options={createHeaderOptions}
          />

        <Stack.Screen
          name="auth.create.intro.mentee"
          component={MenteeIntro}
          options={createHeaderOptions}
          />

        <Stack.Screen
          name="auth.create.form"
          component={CreateForm}
          options={createHeaderOptions}
          />

        <Stack.Screen
          name="auth.create.finish"
          component={CreateFinish}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}