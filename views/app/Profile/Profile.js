import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import profile from '../../../assets/images/profile.png';

import block from '../../../assets/images/icons/block.png';
import edit from '../../../assets/images/icons/pen.png';

export default function Profile({ navigation }) {
  return (
    <ScrollView style={style.container}>
      <View style={{ alignItems: 'center', paddingVertical: 20, paddingBottom: 100 }}>
        <View style={style.top}>
          <TouchableOpacity style={style.pic_container} onPress={() => {navigation.navigate('app.profile.edit')}}>
            <View style={style.pic_cut}>
              <Image source={profile} style={style.pic} />
            </View>

            <View style={style.pic_edit_container}>
              <Image source={edit} style={style.pic_edit} />
            </View>
          </TouchableOpacity>

          <Text style={style.name}>Ismael Rafael da Silva Sousa</Text>
          <Text style={style.member}>Membro desde 19/01/2022</Text>
        </View>

        <View style={style.form}>
          <View style={[style.item, style.item_full]}>
            <Text style={style.label}>Email:</Text>
            <Text style={style.value}>ismaelrsousa.contato@gmail.com</Text>
          </View>

          <View style={style.item}>
            <Text style={style.label}>Telefone:</Text>
            <Text style={style.value}>(13) 98100-7944</Text>
          </View>

          <View style={style.item}>
            <Text style={style.label}>Data de Nascimento:</Text>
            <Text style={style.value}>14/07/2001</Text>
          </View>

          <View style={style.item}>
            <Text style={style.label}>Sexo:</Text>
            <Text style={style.value}>Masculino</Text>
          </View>

          <View style={style.item}>
            <Text style={style.label}>Senha:</Text>
            <Text style={style.value}>***************</Text>
          </View>

          <View style={[style.item, style.item_full]}>
            <Text style={style.label}>CPF:</Text>
            <Text style={style.value}>499.042.178-74</Text>
          </View>
        </View>

        <TouchableOpacity style={style.disable}>
          <Image source={block} style={style.disable_icon} />
          <Text style={style.disable_text}>Desativar Conta</Text>
        </TouchableOpacity>
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

  pic_edit_container: {
    backgroundColor: '#A6A9C6',
    position: 'absolute',
    right: 5,
    bottom: 10,
    width: 30,
    height: 30,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pic_edit: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
  },

  name: {
    color: "#A6A9C6",
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 20
  },

  member: {
    color: "#56596D",
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 16
  },

  form: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  item: {
    alignItems: 'center',
    maxWidth: '45%',
    width: '100%',
    marginBottom: 30
  },
  
  item_full: {
    maxWidth: '100%',
    width: '100%',
  },

  label: {
    textAlign: 'center',
    fontFamily: "SourceSansPro_400Regular",
    color: "#FFF",
    fontSize: 16
  },
  
  value: {
    textAlign: 'center',
    fontFamily: "SourceSansPro_400Regular",
    color: "#A6A9C6",
    fontSize: 16
  },

  disable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 20
  },

  disable_icon: {
    width: 24,
    height: 24,
    marginRight: 10
  },

  disable_text: {
    color: "#E83F3F",
    fontSize: 15,
    fontFamily: "SourceSansPro_700Bold"
  }
});