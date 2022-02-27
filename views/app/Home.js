import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

import profile from '../../assets/images/profile.png';

import message from '../../assets/images/icons/message.png';
import plus from '../../assets/images/icons/plus.png';

export default function Login({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView style={style.content}>
        <View style={style.top_cards}>
          <TouchableOpacity style={[style.top_card, { marginRight: 10 }]}>
            <Text style={style.top_card_big}>12</Text>
            <Text style={style.top_card_label}>Em andamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[style.top_card, { marginRight: 10 }]}>
            <Text style={style.top_card_big}>4</Text>
            <Text style={style.top_card_label}>Finalizadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.top_card}>
            <Text style={style.top_card_big}>3</Text>
            <Text style={style.top_card_label}>Aguardando</Text>
          </TouchableOpacity>
        </View>

        <View style={style.cards}>
          <Text style={style.card_title}>Mentorias <Text style={style.card_title_legend}>(em andamento)</Text></Text>

          <View style={style.cards_list}>
            <ScrollView contentContainerStyle={{paddingBottom: 10}} horizontal={true}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>

              <View style={style.card}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={style.cards}>
          <Text style={style.card_title}>Mentorias <Text style={style.card_title_legend}>(aguardando)</Text></Text>

          <View style={style.cards_list}>
            <ScrollView contentContainerStyle={{paddingBottom: 10}} horizontal={true}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>

              <View style={style.card}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
        
        <View style={style.cards}>
          <Text style={style.card_title}>Mentorias <Text style={style.card_title_legend}>(finalizadas)</Text></Text>

          <View style={style.cards_list}>
            <ScrollView contentContainerStyle={{paddingBottom: 10}} horizontal={true}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>

              <View style={style.card}>
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
                  <Image style={style.card_message_icon} source={message} />

                  <View>
                    <Text style={style.card_message_label}>Última Mensagem</Text>
                    <Text style={style.card_message_text}>Olá Ismael, podemos fazer uma call?</Text>
                  </View>
                </View>

                <TouchableOpacity style={style.card_details}>
                  <Text style={style.card_details_text}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={style.add_mentory}>
        <Image source={plus} style={style.add_mentory_icon} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#323444',
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%'
  },

  top_cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  top_card: {
    flex: 1,
    backgroundColor: '#3C3E4D',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10
  },
  
  top_card_big: {
    color: '#A6A9C6',
    fontSize: 34,
    fontFamily: 'SourceSansPro_700Bold',
    textAlign: "center",
    lineHeight: 34
  },

  top_card_label: {
    color: '#A6A9C6',
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'SourceSansPro_700Bold',
    textAlign: "center"
  },

  card_title: {
    color: '#A6A9C6',
    fontSize: 20,
    fontFamily: 'SourceSansPro_600SemiBold',
    marginBottom: 10
  },

  card_title_legend: {
    color: "#56596D",
    fontSize: 16
  },

  cards: {
    marginBottom: 'auto',
  },

  cards_list: {
    flexDirection: 'row',
  },

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

  add_mentory: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2CB3BC',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500
  },

  add_mentory_icon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
  }
})