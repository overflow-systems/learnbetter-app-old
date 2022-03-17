import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import pic from '../../../assets/images/profile.png';

import Stars from '../../../components/Stars';
import Modal from '../../../components/Modal';

import Icon from 'react-native-vector-icons/FontAwesome';

import CircularProgress from 'react-native-circular-progress-indicator';

export default function Mentory_Show({ navigation }) {
  return (
    <View>
      <ScrollView style={style.container}>
        <View style={[style.content, { paddingBottom: 40 }]}>   
          <View style={style.top}>
            <View style={style.top_pic_container}>
              <Image source={pic} style={style.top_pic} />
            </View>

            <View style={style.top_text}>
              <Text style={style.top_text_name}>Ismael Rafael da Silva Sousa</Text>
              <Text style={style.top_text_tags}>Design, UX/UI, Photoshop, TI, Programação, +30...</Text>
              <Text style={style.top_text_member}>Membro desde 19/01/2022</Text>
            </View>
          </View>

          <Stars avaliation={4.8} />

          <View style={style.desc_container}>
            <Text style={style.desc}>Sou formado no curso de Análise e Desenvolvimento de Sistemas pela Fatec de Praia Grande, já desenvolvi diversos sites e sistemas para clientes de grande e médio porte, além disso, já lecionei um curso de Programação Web para iniciantes durante 5 anos.</Text>

            <Text style={style.desc}>Sou formado no curso de Análise e Desenvolvimento de Sistemas pela Fatec de Praia Grande, já desenvolvi diversos sites e sistemas para clientes de grande e médio porte, além disso, já lecionei um curso de Programação Web para iniciantes durante 5 anos.</Text>
          </View>

          <View style={style.data_row}>
            <View style={style.data}>
              <CircularProgress value={150} maxValue={150} valuePrefix={"+"} radius={35} activeStrokeWidth={8} inActiveStrokeWidth={8} activeStrokeColor={"#2CB3BC"} inActiveStrokeColor={"#56596D"} fontSize={16} textColor={"#FFF"}/>
              <Text style={style.data_desc}>Programas de mentoria concluídos</Text>
            </View>

            <View style={style.data}>
              <CircularProgress value={90} maxValue={100} valueSuffix={"%"} radius={35} activeStrokeWidth={8} inActiveStrokeWidth={8} activeStrokeColor={"#2CB3BC"} inActiveStrokeColor={"#56596D"} fontSize={16} textColor={"#FFF"}/>
              <Text style={style.data_desc}>Alunos satisfeitos</Text>
            </View>
          </View>

          <View style={style.buttons_row}>
            <TouchableOpacity onPress={() => {navigation.navigate("app.mentory.proposal")}} style={[style.button, style.button_lg]}>
              <View style={[style.button_icon_container, style.button_icon_container_lg]}>
                <Icon name="paper-plane" color="#A6A9C6" size={24} style={style.button_icon}/>
              </View>
              <Text style={style.button_text}>Enviar proposta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  top: {
    alignItems: 'center',
  },

  top_pic_container: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 50000
  },

  top_pic: {
    width: '100%',
    height: '100%'
  },

  top_text: {
    marginVertical: 20,
    alignItems: 'center'
  },

  top_text_name: {
    color: "#A6A9C6",
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SourceSansPro_600SemiBold'
  },

  top_text_tags: {
    color: "#A6A9C6",
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'SourceSansPro_400Regular',
    marginVertical: 2
  },

  top_text_member: {
    color: "#56596D",
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'SourceSansPro_600SemiBold'
  },

  desc_container: {
    marginTop: 10,
    maxWidth: 360
  },
  
  desc: {
    color: "#A6A9C6",
    textAlign: 'center',
    fontFamily: "SourceSansPro_400Regular",
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 10
  },

  data_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },

  data: {
    alignItems: 'center',
    maxWidth: '48%',
    width: '100%'
  },

  data_desc: {
    textAlign: 'center',
    color: "#A6A9C6",
    fontSize: 14,
    marginTop: 10,
    fontFamily: "SourceSansPro_400Regular"
  },

  data_circle: {
    width: 70,
    height: 70,
    borderColor: '#56596D',
    borderWidth: 6,
    borderRadius: 50000,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttons_row: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },

  button: {
    alignItems: 'center'
  },

  button_icon_container: {
    width: 50,
    height: 50,
    backgroundColor: "#393B49",
    borderRadius: 5000,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button_icon_container_lg: {
    width: 60,
    height: 60
  },

  button_text: {
    color: '#A6A9C6',
    fontSize: 16,
    fontFamily: "SourceSansPro_400Regular",
    marginTop: 10
  }
})