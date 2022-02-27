//? NAVIGATOR
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import HeaderBack from '../components/Header/HeaderBack';
import HeaderProfile from '../components/Header/HeaderProfile';

//? AUTH - COMPONENTS
import Login from '../views/auth/Login';
import Forgot from '../views/auth/ForgotPassword/Forgot';

import CreateIntro from '../views/auth/CreateAccount/Intro';
import MentorIntro from '../views/auth/CreateAccount/MentorIntro';
import MenteeIntro from '../views/auth/CreateAccount/MenteeIntro';
import CreateForm from '../views/auth/CreateAccount/Form';
import CreateFinish from '../views/auth/CreateAccount/Finish';

//? APP - COMPONENTS
import Home from '../views/app/Home';

//? FONTS
import { useFonts, SourceSansPro_200ExtraLight, SourceSansPro_300Light, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold, SourceSansPro_900Black, } from '@expo-google-fonts/source-sans-pro';

const appHeader = {
  headerStyle: { backgroundColor: '#3C3E4D' },
  headerTitle: () => (<HeaderProfile />),
}

const authHeader = {
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
  let [fontsLoaded] = useFonts({SourceSansPro_200ExtraLight, SourceSansPro_300Light, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold, SourceSansPro_900Black });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='app.home'>
        <Stack.Group>
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
            options={authHeader}
            />

          <Stack.Screen
            name="auth.create.intro.mentor"
            component={MentorIntro}
            options={authHeader}
            />

          <Stack.Screen
            name="auth.create.intro.mentee"
            component={MenteeIntro}
            options={authHeader}
            />

          <Stack.Screen
            name="auth.create.form"
            component={CreateForm}
            options={authHeader}
            />

          <Stack.Screen
            name="auth.create.finish"
            component={CreateFinish}
            options={{ headerShown: false }}
            />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="app.home"
            component={Home}
            options={appHeader}
            />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}