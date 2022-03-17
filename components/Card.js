import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import profile from '../assets/images/profile.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

export default function Card(props) {
  const navigation = useNavigation();

  return (
    <View style={[style.card, {marginRight: 20}]}>
      <View style={style.card_top}>
        <View style={style.card_top_pic_container}>
          <Image style={style.card_top_pic} source={profile} />
        </View>

        <View style={style.card_top_text}>
          <Text style={style.card_top_name}>Afonso Chaves</Text>
          <Text style={style.card_top_date}>19/01/2022</Text>
        </View>
      </View>

      <Text style={style.card_tags}>Design, UX/UI, Photoshop, TI</Text>
      
      <View style={style.card_message}>
        <Icon name="chat" size={30} style={style.card_message_icon} color="#A6A9C6" />

        <View>
          <Text style={style.card_message_label}>Última Mensagem</Text>
          <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
        </View>
      </View>

      <TouchableOpacity style={style.card_details}>
        <Text style={style.card_details_text}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "#3C3E4D",
    padding: 20,
    borderRadius: 10,
    minWidth: 350,
  },

  card_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  card_top_pic_container: {
    width: 70,
    height: 70,
    overflow: "hidden",
    borderRadius: 500
  },

  card_top_pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  card_top_text: {
    marginLeft: 10
  },

  card_top_name: {
    color: "#A6A9C6",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: 'SourceSansPro_700Bold'
  },

  card_top_date: {
    color: "#A6A9C6",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'SourceSansPro_600SemiBold'
  },

  card_tags: {
    color: "#A6A9C6",
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "SourceSansPro_700Bold"
  },

  card_message: {
    flexDirection: 'row',
    alignItems: "center"
  },

  card_message_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10
  },

  card_message_label: {
    color: "#A6A9C6",
    fontSize: 14,
    fontFamily: 'SourceSansPro_600SemiBold'
  },

  card_message_text: {
    color: "#FFF",
    fontSize: 13
  },

  card_details: {
    marginTop: 20,
    marginLeft: 'auto'
  },

  card_details_text: {
    color: "#A6A9C6",
    fontSize: 14,
    fontFamily: "SourceSansPro_700Bold"
  },
})