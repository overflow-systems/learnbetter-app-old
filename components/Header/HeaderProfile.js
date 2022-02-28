import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import ProfilePic from '../../assets/images/profile.png';

import Message from '../../assets/images/icons/message.png';
import Bell from '../../assets/images/icons/bell.png';

export default function ActionButton() {
  const navigation = useNavigation();
  
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("app.profile")}} style={style.profile}>
        <View style={style.profile_pic}>
          <Image source={ProfilePic} style={style.pic} />
        </View>

        <Text style={style.profile_text}>Olá, Ismael</Text>
      </TouchableOpacity>

      <View style={style.buttons_row}>
        <TouchableOpacity style={[style.button, {marginRight: 20}]}>
          <Image source={Message} style={style.button_icon} />
          <View style={style.new} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("app.notifications")}} style={style.button}>
          <Image source={Bell} style={style.button_icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    paddingRight: 40,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile_text: {
    color: "#FFF",
    fontFamily: 'SourceSansPro_600SemiBold'
  },

  profile_pic : {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 500,
    marginRight: 10
  },

  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  buttons_row: {
    flexDirection: 'row',
  },

  button: {
    width: 24,
    height: 24,
  },
  
  button_icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  new: {
    width: 8,
    height: 8,
    backgroundColor: '#FFF',
    borderRadius: 500,
    position: 'absolute',
    right: 2,
    bottom: 2
  }
})