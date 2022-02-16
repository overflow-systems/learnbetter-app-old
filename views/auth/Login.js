import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

import logo from '../../assets/images/logo-horizontal-white.png';
import ActionButton from '../../components/ActionButton';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Image source={logo} style={style.logo}></Image>
        <Text style={style.desc}>Entre com os dados da sua conta para continuar</Text>
      </View>

      <View style={style.center}>
        <View style={style.label}>
          <Text style={style.input_desc}>Email <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput placeholder="example@email.com.br" style={style.input} placeholderTextColor="#50515F" />
        </View>

        <View style={style.label_nomargin}>
          <Text style={style.input_desc}>Senha <Text style={{color: '#FF6363'}}>*</Text>:</Text>
          <TextInput placeholder="*********" style={style.input} placeholderTextColor="#50515F" />
        </View>

        <TouchableOpacity style={style.forgot}><Text style={style.forgot_text}>Esqueci minha senha</Text></TouchableOpacity>
      </View>

      <View style={style.bottom}>
        <ActionButton text="Entrar" />
        <TouchableOpacity style={style.create_account}><Text style={style.create_account_text}>Ainda não tenho uma conta</Text></TouchableOpacity>
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
    paddingHorizontal: 40
  },

  top: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40
  },

  center: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40
  },

  bottom: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40
  },

  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },

  desc: {
    color: '#A6A9C6',
    marginBottom: 40
  },

  label: {
    width: '100%',
    marginBottom: 20
  },

  label_nomargin: {
    width: '100%',
  },

  forgot: {
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 15,
  },

  forgot_text: {
    color: '#9495A5'
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
    borderRadius: 500,
    color: "#FFF"
  },

  create_account: {
    marginTop: 10,
  },

  create_account_text: {
    color: '#9495A5'
  }
})