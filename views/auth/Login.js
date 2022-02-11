import { Text, View, StyleSheet, Image, TextInput } from "react-native";

import logo from '../../assets/images/logo-horizontal-white.png';

import Input from '../../components/Input';

export default function Login() {
  return (
    <View style={style.container}>
      <Image source={logo} style={style.logo}></Image>

      <Text style={style.desc}>Entre com os dados da sua conta para continuar</Text>

      <Input label="Email" required={true} placeholder="example@email.com.br"/>
      <Input label="Senha" required={true} placeholder="*********"/>
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

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  desc: {
    color: '#A6A9C6',
    marginBottom: 40
  },
})