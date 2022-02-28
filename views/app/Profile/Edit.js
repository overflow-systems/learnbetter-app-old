import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Picker } from "react-native";

import { useState } from "react";

import profile from '../../../assets/images/profile.png';
import photo from '../../../assets/images/icons/photo.png';

import ActionButton from '../../../components/ActionButton';
import SecondaryButton from '../../../components/SecondaryButton';

export default function Profile({ navigation }) {
  const [nome, setNome] = useState("Ismael Rafael da Silva Sousa");
  const [email, setEmail] = useState("ismaelrsousa.contato@gmail.com");
  const [telefone, setTelefone] = useState("(13) 98100-7944");
  const [nascimento, setNascimento] = useState("14/07/2001");
  const [senha, setSenha] = useState("aaaaaaaaaaa");

  return (
    <ScrollView style={style.container}>
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <View style={style.top}>
          <TouchableOpacity style={style.pic_container}>
            <View style={style.pic_cut}>
              <View style={style.pic_white}>
                <Image source={photo} style={style.pic_white_icon} />
              </View>
              <Image source={profile} style={style.pic} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Nome <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput value={nome} onChangeText={setNome} placeholder="Afonso Chaves da Silva" style={style.input} placeholderTextColor="#5C6A7E" />
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Email <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="example@email.com.br" style={style.input} placeholderTextColor="#5C6A7E" />
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Telefone <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput value={telefone} onChangeText={setTelefone} placeholder="example@email.com.br" style={style.input} placeholderTextColor="#5C6A7E" />
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Data de Nascimento <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput value={nascimento} onChangeText={setNascimento} placeholder="example@email.com.br" style={style.input} placeholderTextColor="#5C6A7E" />
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Data de Nascimento <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <View style={[style.input, style.picker]}>
            <Picker style={{color: '#FFF'}}>
              <Picker.Item label="Selecione" value=""/>
              <Picker.Item label="Masculino" value="m"/>
              <Picker.Item label="Feminino" value="m"/>
              <Picker.Item label="Outro" value="na"/>
            </Picker>
          </View>
        </View>

        <View style={style.label}>
          <Text style={style.input_desc}>Senha <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput value={senha} onChangeText={setSenha} placeholder="**********" style={style.input} secureTextEntry={true} placeholderTextColor="#5C6A7E" />
        </View>

        <ActionButton text="Salvar" />

        <SecondaryButton text="Cancelar"/>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323444',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  top: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  },

  pic_container: {
    position: 'relative'
  },

  pic_cut: {
    width: 120,
    height: 120,
    borderRadius: 500,
    overflow: 'hidden',
    marginBottom: 10
  },

  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  pic_white: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#A6A9C6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    opacity: .5
  },

  label: {
    width: '100%',
    marginBottom: 20,
  },

  input_desc: {
    color: '#FFF',
    marginLeft: 25,
    marginBottom: 5,
    fontSize: 15,
    fontFamily: 'SourceSansPro_400Regular'
  },

  input: {
    width: '100%',
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#3C3E4E",
    borderRadius: 500,
    color: "#FFF",
    fontFamily: 'SourceSansPro_400Regular'
  },

  picker: {
    paddingVertical: 4,
  },
});