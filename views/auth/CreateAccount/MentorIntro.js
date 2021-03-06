//? REACT-NATIVE
import { Text, View, StyleSheet, Image } from "react-native";

//? IMAGES
import mentorIcon from '../../../assets/images/icons/mentor.png';
import ActionButton from '../../../components/ActionButton';

export default function MentorIntro() {
  return (
    <View style={style.container}>
      <View style={style.icon_container}>
        <Image style={style.icon} source={mentorIcon} />
      </View>

      <Text style={style.button_text}>Quero ser</Text>
      <Text style={[style.button_text, style.bold]}>Mentor</Text>

      <Text style={style.desc}>
        Quero prestar mentoria para iniciantes de uma área de estudo específica e lorem ipsum dolor sit ammet.
      </Text>

      <Text style={style.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ultrices arcu. Etiam sed dui quis urna rutrum fringilla non sit amet purus. In porta ac massa a lacinia.
      </Text>

      <View style={style.bottom}>
        <ActionButton text="Quero ser MENTOR" route="auth.create.form" />
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
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
    maxWidth: 325,
    marginBottom: 30,
    lineHeight: 24
  },

  icon_container: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#5B5F79'
  },

  icon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },

  button_text: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'SourceSansPro_400Regular'
  },

  bold: {
    fontFamily: 'SourceSansPro_900Black',
    letterSpacing: .5,
    textTransform: 'uppercase',
    marginBottom: 30
  },

  bottom: {
    width: '100%',
    marginTop: 'auto'
  }
})