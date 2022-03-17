import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import Icon from 'react-native-vector-icons/Fontisto';


export default function Stars(props) {
  let avaliation = props.avaliation;

  let stars = [];
  let result = [];

  for(let i = 0; i < 5; i++) {
    if(avaliation > 0) {
      if(avaliation < 1) {
        stars[i] = .5;
        result.push(
          <View style={style.star_container}>
            <Icon name="star" style={style.star} key={i} color="#56596D" size={26} />
            <Icon name="star-half" style={style.star_half} key={i+.5} color="#2CB3BC" size={26} />
          </View>
        );
        avaliation = Math.floor(avaliation);
      }
      else {
        result.push(
          <View style={style.star_container}>
            <Icon name="star" style={style.star} key={i} color="#2CB3BC" size={26} />
          </View>
        );
        stars[i] = 1;
        avaliation--;
      }
    }
    else
      result.push(
        <View style={style.star_container}>
          <Icon name="star" style={style.star} key={i} color="#56596D" size={26} />
        </View>
      );
  };

  return (
    <View style={style.container}>
      <View style={style.stars}>
        {result}
      </View>

      <Text style={style.avaliation}>{Number.isInteger(props.avaliation) ? props.avaliation : props.avaliation.toFixed(1) }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },

  stars: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  star_container: {
    position: 'relative',
    marginHorizontal: 3,
  },

  star: {
  },

  star_half: {
    position: 'absolute',
    left: 0,
    top: 0,
  },

  avaliation: {
    color: "#56596D",
    fontSize: 18,
    fontFamily: "SourceSansPro_600SemiBold",
    marginTop: 10
  }
});