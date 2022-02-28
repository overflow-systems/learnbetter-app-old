import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import flag from '../../assets/images/icons/flag.png';
import clock from '../../assets/images/icons/clock.png';

export default function Notifications({ navigation }) {
  return (
    <View>
      <ScrollView style={style.container}>
        <View style={style.content}>
          <View style={style.item}>
            <View style={style.new} />
            <View style={style.text}>
              <Text style={style.principal}>Afonso Chaves</Text>

              <View style={style.desc}>
                <Text style={{color: "#A6A9C6" }}>
                  Status da mentoria alterado para: Status da mentoria alterado para:
                  <Image style={style.icon} source={flag} />
                  <Text style={{color: "#2CBC80"}}>Concluído</Text>
                </Text>
              </View>
            </View>

            <Text style={style.date}>21:01</Text>
          </View>

          <View style={style.item}>
            <View style={style.new} />
            <View style={style.text}>
              <Text style={style.principal}>Afonso Chaves</Text>

              <View style={style.desc}>
                <Text style={{color: "#A6A9C6" }}>Aceitou sua proposta de mentoria</Text>
              </View>
            </View>

            <Text style={style.date}>21:01</Text>
          </View>
          
          <View style={style.item}>
            <View style={style.new} />
            <View style={style.text}>
              <Text style={style.principal}>Afonso Chaves</Text>

              <View style={style.desc}>
                <Text style={{color: "#A6A9C6" }}>Aceitou sua proposta de mentoria</Text>
              </View>
            </View>

            <Text style={style.date}>21:01</Text>
          </View>

          <View style={style.item}>
            <View style={style.text}>
              <Text style={style.principal}>Afonso Chaves</Text>

              <View style={style.desc}>
                <Text style={{color: "#A6A9C6" }}>
                  Status da mentoria alterado para: Status da mentoria alterado para:
                  <Image style={style.icon} source={clock} />
                  <Text style={{color: "#DCDF3B"}}>Aguardando</Text>
                </Text>
              </View>
            </View>

            <Text style={style.date}>21:01</Text>
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
    paddingLeft: 5,
    height: '100%',
    width: '100%',
    backgroundColor: '#323444',
  },

  content: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  new: {
    position: 'absolute',
    left: -15,
    width: 5,
    height: 5,
    backgroundColor: '#A6A9C6',
    borderRadius: 500
  },

  item: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: "#50515F",
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingVertical: 15,
    position: 'relative'
  },

  principal: {
    color: "#A6A9C6",
    fontSize: 16,
    fontFamily: "SourceSansPro_700Bold"
  },

  desc: {
    color: "#A6A9C6",
    fontSize: 15,
    fontFamily: "SourceSansPro_400Regular",
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginHorizontal: 5
  },

  green: {
    color: '#2CBC80',
    alignItems: 'center',
    flexDirection: 'row',
  },

  date: {
    color: '#A6A9C6',
    position: 'absolute',
    right: 0,
    fontFamily: "SourceSansPro_400Regular"
  }
});