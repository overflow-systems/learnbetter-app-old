import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

import { useNavigation } from '@react-navigation/native';

import ProfilePic from '../../assets/images/profile.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
          <Icon name="chat" size={30} color="#A6A9C6" />
          <View style={style.new} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("app.notifications")}} style={style.button}>
          <MaterialIcons name="notifications" size={30} color="#A6A9C6" />
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
    width: 32,
    height: 32,
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
    right: 3,
    bottom: 4
  }
})