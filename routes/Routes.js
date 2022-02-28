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

import Profile from '../views/app/Profile/Profile';
import Profile_Edit from '../views/app/Profile/Edit';
import Notifications from '../views/app/Notifications';

//? FONTS
import { useFonts, SourceSansPro_200ExtraLight, SourceSansPro_300Light, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold, SourceSansPro_900Black, } from '@expo-google-fonts/source-sans-pro';

const appHeader = {
  headerStyle: { backgroundColor: '#3C3E4D' },
  headerBackVisible: false,
  headerTitle: () => (<HeaderProfile />),
}

const appHeaderBack = {
  headerStyle: {
    backgroundColor: '#3C3E4D',
  },
  headerBackVisible: false,
  headerTitle: () => (<HeaderBack />),
}

const authHeader = {
  headerStyle: {
    backgroundColor: '#3C3E4D',
  },
  headerBackVisible: false,
  headerTitle: () => (<HeaderBack />),
}

export default function Auth () {
  let [fontsLoaded] = useFonts({SourceSansPro_200ExtraLight, SourceSansPro_300Light, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold, SourceSansPro_900Black });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='auth.login'>
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

          <Stack.Screen
            name="app.profile"
            component={Profile}
            options={appHeaderBack}
            />

          <Stack.Screen
            name="app.profile.edit"
            component={Profile_Edit}
            options={appHeaderBack}
            />

          <Stack.Screen
            name="app.notifications"
            component={Notifications}
            options={appHeaderBack}
            />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}