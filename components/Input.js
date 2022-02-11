import { Text, View, StyleSheet, Image, TextInput } from "react-native";

export default function Input(props) {
  return (
    <View style={style.label}>
      <Text style={style.input_desc}>{props.label} <Text style={{color: '#FF6363'}}>{props.required ? '*' : ''}</Text>:</Text>
      <TextInput placeholder={props.placeholder} style={style.input} placeholderTextColor="#50515F" />
    </View>
  )
}

const style = StyleSheet.create({
  label: {
    width: '100%',
    marginBottom: 20
  },

  input_desc: {
    color: '#FFF',
    marginLeft: 25,
    marginBottom: 5
  },

  input: {
    width: '100%',
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#3C3E4E",
    borderRadius: 500
  }
})