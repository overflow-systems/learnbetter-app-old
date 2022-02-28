import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function SecondaryButton(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {if(props.route) navigation.navigate(props.route)}}
      style={style.button}>
        <Text style={style.text}>{ props.text }</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    padding: 10,
    paddingVertical: 18,
    backgroundColor: 'transparent',
    borderRadius: 500,
    shadowOpacity: 0,
    width: '100%',
    marginBottom: 10
  },

  text: {
    color: "#A6A9C6",
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'SourceSansPro_400Regular'
  }
})