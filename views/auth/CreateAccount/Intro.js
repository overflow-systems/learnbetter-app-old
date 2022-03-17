//? REACT-NATIVE
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//? NAVIGATION
import { useNavigation } from '@react-navigation/native';

//? IMAGES
import mentorIcon from '../../../assets/images/icons/mentor.png';
import menteeIcon from '../../../assets/images/icons/mentee.png';

export default function Intro() {
  //? NAVIGATION
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.desc}>Antes de seguir para seus dados, selecione o tipo de conta que você deseja:</Text>

      <View style={style.buttons_line}>
        <TouchableOpacity onPress={() => {navigation.navigate('auth.create.intro.mentor')}} style={style.button}>
          <View style={[style.icon_container, style.icon_blue]}>
            <Image style={style.icon} source={mentorIcon} />
          </View>
          <Text style={style.button_text}>Quero ser</Text>
          <Text style={[style.button_text, style.bold]}>Mentor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('auth.create.intro.mentee')}} style={style.button}>
          <View style={[style.icon_container, style.icon_green]}>
            <Image style={style.icon} source={menteeIcon} />
          </View>
          <Text style={style.button_text}>Quero ser</Text>
          <Text style={[style.button_text, style.bold]}>Mentorado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#323444',
    paddingHorizontal: 40,
    paddingVertical: 40
  },

  desc: {
    fontFamily: 'SourceSansPro_400Regular',
    color: '#A6A9C6',
    fontSize: 17,
    textAlign: 'center',
    maxWidth: 325
  },

  buttons_line: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 60,
    justifyContent: 'space-around'
  },

  button: {
    alignItems: 'center',
  },

  icon_container: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: "#5B5F79"
  },

  icon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },

  button_text: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'SourceSansPro_400Regular'
  },

  bold: {
    fontFamily: 'SourceSansPro_900Black',
    letterSpacing: .5,
    textTransform: 'uppercase'
  }
})