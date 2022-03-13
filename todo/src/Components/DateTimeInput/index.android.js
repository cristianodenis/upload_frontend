import React, {useState,useEffect} from 'react';
import {View, Text, Platform,TouchableOpacity,TextInput,Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';
//1598051730000
export default function DateTimeAndroid({type,save,icon,dt,hora,id,dh,when}){

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState( type == 'date' ? dt : hora);

   async function onChange(event, selectedDate){
   
    if(type == 'date'){
     
            const currentDate = await selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            setDados(`${currentDate.getDate() < 10 ? '0'+(currentDate.getDate()):currentDate.getDate()}-${(currentDate.getMonth()+1) < 10 ? '0'+(currentDate.getMonth()+1):(currentDate.getMonth()+1)}-${currentDate.getFullYear()}`);
            save(`${currentDate.getFullYear()}-${(currentDate.getMonth()+1) < 10 ? '0'+(currentDate.getMonth()+1):(currentDate.getMonth()+1)}-${currentDate.getDate() < 10 ? '0'+(currentDate.getDate()):currentDate.getDate()}`); 
            
        }else if(type == 'hour'){
            const currentDate = await selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            setDados(`${currentDate.getHours() < 10 ? '0'+currentDate.getHours() : currentDate.getHours() }:${currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes():currentDate.getMinutes()}:00`);
            save(`${(currentDate.getHours()-3) < 10 ? '0'+(currentDate.getHours()-3) : (currentDate.getHours()-3) }:${currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes():currentDate.getMinutes()}:00.000`);
            
        }
        
   }
  

    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
     <TouchableOpacity onPress={()=> {type == 'date' ? showMode('date') : showMode('time')}} >
            <TextInput style={[styles.input,{color:'coral'}]}
            placeholder={ type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora'}
            onChange={(text) => setDados(text)}
            editable={false}
            value={dados}/>
            <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconClock}/>
        </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
  
    </View>
  );
};