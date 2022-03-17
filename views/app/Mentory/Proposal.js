import { Text, View, StyleSheet, TextInput } from "react-native";

import { useState } from 'react';

import ActionButton from '../../../components/ActionButton';
import Modal from '../../../components/Modal';

export default function Mentory_Show({ navigation }) {
  const [modal, SetModal] = useState(false);

  return (
    <View>
      <Modal visible={modal}/>

      <View style={style.container}>
        <Text style={style.desc}>Digite uma mensagem introdutória se apresentando e descrevendo suas necessidades.</Text>

        <Text style={style.desc}>Enviando proposta para <Text style={{color: "#FFF"}}>Ismael Rafael da Silva Sousa</Text></Text>

        <TextInput placeholder="Mensagem" style={style.input} placeholderTextColor="#5C6A7E" multiline={true} />

        <ActionButton text="Enviar" press={() => SetModal(true)} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
    width: '100%',
    backgroundColor: '#323444',
  },
  
  desc: {
    color: "#A6A9C6",
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10
  },

  input: {
    width: '100%',
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#3C3E4E",
    borderRadius: 20,
    color: "#FFF",
    fontFamily: 'SourceSansPro_400Regular',
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 40
  },
})