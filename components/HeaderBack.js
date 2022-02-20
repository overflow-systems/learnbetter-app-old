import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import Back from '../assets/images/icons/back.png';

export default function ActionButton() {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={style.back} onPress={() => {navigation.goBack()}}>
      <Image style={style.icon} source={Back}/>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    marginRight: 30
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
})