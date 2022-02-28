import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import Back from '../../assets/images/icons/back.png';
import Message from '../../assets/images/icons/message.png';
import Bell from '../../assets/images/icons/bell.png';

export default function ActionButton() {
  const navigation = useNavigation();
  
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.back} onPress={() => {navigation.goBack()}}>
        <Image style={style.back_icon} source={Back}/>
      </TouchableOpacity>

      <Text style={style.title}>Chat</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    paddingRight: 40,
  },

  back: {
    width: 24,
    height: 24,
    marginRight: 30
  },

  back_icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },

  title: {
    color: "#A6A9C6",
    fontSize: 18,
    fontFamily: 'SourceSansPro_700Bold'
  }
})