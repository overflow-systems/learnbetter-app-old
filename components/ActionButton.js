import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";


export default function ActionButton(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}><Text style={style.text}>{ props.text }</Text></TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%'
  },

  button: {
    padding: 10,
    paddingVertical: 18,
    backgroundColor: '#2C66BC',
    borderRadius: 500,
    shadowOpacity: 0
  },

  text: {
    color: "#FFF",
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  }
})