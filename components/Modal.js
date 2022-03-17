import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Modal(props) {
  const navigation = useNavigation();

  return (
    <View style={
      [style.container,
        !props.visible ? {
          top: -1000
        } : {
          top: 0
        }
      ]
      }>
      <View style={style.background}/>

      <View style={style.content}>
        <View style={style.icon_container}>
          <Icon name="checkmark-circle-outline" size={70} color="#2CB3BC" style={style.icon}/>
        </View>
        <Text style={style.title}>Proposta enviada com sucesso!</Text>

        <Text style={style.desc}>Sua proposta de mentoria foi encaminhada para análise do mentor, em até 3 dias úteis você terá seu retorno.</Text>

        <TouchableOpacity style={style.button}>
          <Text style={style.button_text}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: 99,
    opacity: .5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#323444',
    padding: 20,
    zIndex: 99,
    width: '80%',
    alignItems: 'center',
    borderRadius: 14
  },

  title: {
    fontSize: 20,
    fontFamily: 'SourceSansPro_700Bold',
    color: "#2CB3BC",
    marginVertical: 5,
    textAlign: 'center',
  },

  desc: {
    fontSize: 15,
    fontFamily: 'SourceSansPro_400Regular',
    textAlign: 'center',
    color: "#FFF",
    marginTop: 20,
    marginBottom: 40
  },

  button: {
    backgroundColor: "#2CB3BC",
    paddingVertical: 16,
    paddingHorizontal: 30,
    minWidth: 150,
    borderRadius: 10
  },

  button_text: {
    textAlign: 'center',
    color: "#FFF",
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 18
  }
})