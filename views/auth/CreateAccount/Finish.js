//? REACT-NATIVE
import { Text, View, StyleSheet, Image } from "react-native";
import ActionButton from '../../../components/ActionButton';

//? IMAGE
import success from '../../../assets/images/success-hero.png';

//? NAVIGATION
import { useNavigation } from '@react-navigation/native';

export default function Intro() {
  //? NAVIGATION
  const navigation = useNavigation();
  
  return (
    <View style={style.container}>
      <Text style={[style.desc, style.white, { fontSize: 20, marginVertical: 5 }]}>Tudo certo!</Text>

      <Text style={style.desc}>Você já pode aproveitar os benefícios da plataforma <Text style={style.white}>Learn Better!</Text></Text>

      <Text style={[style.desc, { marginTop: 20 }]}>Bons estudos!</Text>
      

      <Image style={style.hero} source={success} />

      <ActionButton text="Acessar a plataforma" route="auth.login"/>
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
    paddingVertical: 40,
  },

  desc: {
    color: '#A6A9C6',
    textAlign: 'center',
    maxWidth: 300,
    fontSize: 16
  },

  hero: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    marginVertical: 100,
  },

  white: {
    color: '#FFF',
    fontFamily: 'SourceSansPro_600SemiBold'
  }
})