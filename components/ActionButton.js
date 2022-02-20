import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function ActionButton(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {if(props.route) navigation.navigate(props.route)}}
      style={[style.button, { backgroundColor: props.background ?? '#2C66BC' }]}>
        <Text style={style.text}>{ props.text }</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    padding: 10,
    paddingVertical: 18,
    backgroundColor: '#2C66BC',
    borderRadius: 500,
    shadowOpacity: 0,
    width: '100%'
  },

  text: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'SourceSansPro_700Bold'
  }
})