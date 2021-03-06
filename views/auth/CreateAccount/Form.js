//? REACT-NATIVE
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Picker } from "react-native";

import { useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons';

import DateTimePicker from '@react-native-community/datetimepicker';

//? IMAGE
import chevron from '../../../assets/images/icons/chevron.png';

//? NAVIGATION
import { useNavigation } from '@react-navigation/native';

export default function Intro() {

  let [step, setStep] = useState(0);

  const [mytags, setMyTags] = useState([
    {label: 'Informática', active: false},
    {label: 'Programação', active: false},
    {label: 'Ti', active: false},
    {label: 'Design', active: false},
    {label: 'Etc', active: false}
  ]);
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showDate, setShowDate] = useState(false);
  const [tags, setTags] = useState([]);

  //? NAVIGATION
  const navigation = useNavigation();

  let myresult = [];

  mytags.map((value, index) => {
    myresult.push(
      <TouchableOpacity
        onPress={() => { toggleTag(value) }}
        style={[style.tag, tags.includes(value.label) ? style.tag_active : {}]}>
          <Text style={[style.tag_text, tags.includes(value.label) ? style.tag_text_active : {}]}>
            {value.label}
          </Text>
      </TouchableOpacity>
    );
  })

  const toggleTag = (data) => {
    let result = tags;

    if(tags.includes(data.label)) {
      result.splice(result.indexOf(data.label), 1);
      
    }
    else {
      result.push(data.label);
      
    }

    setTags(result)
    console.log(tags);
  }

  if(step == 0) {
    return (
      <View style={style.container}>
        <Text style={style.desc}>Preencha com seus dados pessoais</Text>
        <Text style={style.desc}>(campos com <Text style={style.red}>*</Text> são obrigatórios)</Text>

        <View style={style.form_container}>
          <View style={style.label}>
            <Text style={style.input_desc}>Nome <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="Afonso Chaves da Silva" style={style.input} placeholderTextColor="#5C6A7E" />
          </View>

          <View style={style.label}>
            <Text style={style.input_desc}>Email <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="example@email.com.br" style={style.input} placeholderTextColor="#5C6A7E" />
          </View>

          <View style={style.label}>
            <Text style={style.input_desc}>Telefone <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="(00) 00000-0000" style={style.input} placeholderTextColor="#5C6A7E" />
          </View>
        </View>

        <TouchableOpacity onPress={() => {setStep(step+1)}} style={style.next}>
          <Text style={style.next_desc}>Continuar</Text>
          <Icon name="caret-forward" color="#5B5E79" size={20} style={style.next_icon} />
        </TouchableOpacity>
      </View>
    )
  }

  else if(step == 1) {
    return (
      <View style={style.container}>
        <Text style={style.desc}>Preencha com seus dados pessoais</Text>
        <Text style={style.desc}>(campos com <Text style={style.red}>*</Text> são obrigatórios)</Text>

        <View style={style.form_container}>
          <View style={style.label}>
            <Text style={style.input_desc}>Sexo <Text style={style.red}>*</Text>:</Text>
            <View style={[style.input, style.picker]}>
              <Picker style={{color: '#FFF'}}>
                <Picker.Item label="Selecione" value=""/>
                <Picker.Item label="Masculino" value="m"/>
                <Picker.Item label="Feminino" value="m"/>
                <Picker.Item label="Outro" value="na"/>
              </Picker>
            </View>
          </View>

          <View style={style.label}>
            <Text style={style.input_desc}>CPF <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="000.000.000-00" style={style.input} placeholderTextColor="#5C6A7E" />
          </View>

          <View style={style.label}>
            <Text style={style.input_desc}>Data de Nascimento <Text style={style.red}>*</Text>:</Text>
            <Text onPress={() => {if(showDate == false)setShowDate(true)}} placeholder="DD/MM/YYYY" style={[style.input, style.date_picker]} placeholderTextColor="#5C6A7E">{date.toString()}</Text>

            {showDate && (
              <DateTimePicker
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={(e, val) => {if(val) setDate(val);setShowDate(false)}}
              />
            )}
            {/* <TextInput placeholder="(00) 00000-0000" style={style.input} placeholderTextColor="#5C6A7E" /> */}
          </View>
        </View>

        <TouchableOpacity onPress={() => {setStep(step+1)}} style={style.next}>
          <Text style={style.next_desc}>Continuar</Text>
          <Icon name="caret-forward" color="#5B5E79" size={20} style={style.next_icon} />
        </TouchableOpacity>
      </View>
    )
  }

  else if(step == 2) {
    return (
      <View style={style.container}>
        <Text style={style.desc}>Preencha com seus dados pessoais</Text>
        <Text style={style.desc}>(campos com <Text style={style.red}>*</Text> são obrigatórios)</Text>

        <View style={style.form_container}>
          <View style={style.label}>
            <Text style={style.input_desc}>Senha <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="**************" style={style.input} placeholderTextColor="#5C6A7E" secureTextEntry={true}/>
          </View>

          <View style={style.label}>
            <Text style={style.input_desc}>Confirmar senha <Text style={style.red}>*</Text>:</Text>
            <TextInput placeholder="**************" style={style.input} placeholderTextColor="#5C6A7E" secureTextEntry={true}/>
          </View>
        </View>

        <TouchableOpacity onPress={() => {setStep(step+1)}} style={style.next}>
          <Text style={style.next_desc}>Continuar</Text>
          <Icon name="caret-forward" color="#5B5E79" size={20} style={style.next_icon} />
        </TouchableOpacity>
      </View>
    )
  }

  else {
    return (
      <View style={style.container}>
        <Text style={style.desc}>Quase lá!</Text>
        <Text style={style.desc}>Agora selecione os itens que mais se encaixam no programa de mentoria que você procura / irá oferecer</Text>

        <View style={style.tags_container}>
          {myresult}
        </View>

        <TouchableOpacity onPress={() => {navigation.navigate("auth.create.finish")}} style={style.next}>
          <Text style={style.next_desc}>Continuar</Text>
          <Icon name="caret-forward" color="#5B5E79" size={20} style={style.next_icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#323444',
    paddingHorizontal: 40,
    paddingVertical: 40
  },

  form_container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },

  desc: {
    fontFamily: 'SourceSansPro_400Regular',
    color: '#A6A9C6',
    fontSize: 17,
    textAlign: 'center',
    maxWidth: 325,
  },

  red: {
    color: '#FF6363'
  },

  label: {
    width: '100%',
    marginBottom: 20,
  },

  input_desc: {
    color: '#FFF',
    marginLeft: 25,
    marginBottom: 5,
    fontSize: 15,
    fontFamily: 'SourceSansPro_400Regular'
  },

  input: {
    width: '100%',
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#3C3E4E",
    borderRadius: 500,
    color: "#FFF",
    fontFamily: 'SourceSansPro_400Regular'
  },

  picker: {
    paddingVertical: 4,
  },

  date_picker: {
    paddingVertical: 22,
  },
  
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 'auto'
  },

  next_desc: {
    color: '#A6A9C6',
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 18,
    letterSpacing: .5,
    marginRight: 14
  },

  tags_container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30
  },

  tag: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#A6A9C6",
    borderRadius: 500,
    marginRight: 7,
    marginBottom: 12
  },

  tag_active: {
    backgroundColor: '#A6A9C6'
  },

  tag_text: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: 'SourceSansPro_400Regular'
  },

  tag_text_active: {
    color: '#323444'
  }
})