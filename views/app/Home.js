import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import Card from '../../components/Card';

import plus from '../../assets/images/icons/plus.png';

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView style={style.container}>
        <View style={[style.content, { paddingBottom: 40 }]}>
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
                <Card />
                <Card />
              </ScrollView>
            </View>
          </View>

          <View style={style.cards}>
            <Text style={style.card_title}>Mentorias <Text style={style.card_title_legend}>(aguardando)</Text></Text>

            <View style={style.cards_list}>
              <ScrollView contentContainerStyle={{paddingBottom: 10}} horizontal={true}>
                <Card />
                <Card />
              </ScrollView>
            </View>
          </View>

          <View style={style.cards}>
            <Text style={style.card_title}>Mentorias <Text style={style.card_title_legend}>(finalizadas)</Text></Text>

            <View style={style.cards_list}>
              <ScrollView contentContainerStyle={{paddingBottom: 10}} horizontal={true}>
                <Card />
                <Card />
              </ScrollView>
            </View>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
    width: '100%',
    backgroundColor: '#323444',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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