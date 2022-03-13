import React,{useState} from 'react';
import {TouchableOpacity,Image,TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

//const dateTimePicker = new DateTimePicker();

import styles from './styles';

import { format } from 'date-fns';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({type,save}){
    const [datetime,setDateTime] = useState();
   
    async function selectDataOrHour(){
        
        if(type == 'date')
        {
            const {action,year,month,day} = await DateTimePicker.open({
                mode: 'calendar'
          });
        
            if(action == DateTimePicker.dateSetAction){
                setDateTime(`${day} - ${month} - ${year}`);
                save(format(new Date(year,month,day),'yyyy-MM-dd'));
            }
        }

             else
            {
               const {action, hour, minute} = await DateTimePicker.open({
                   is24Hour: true
                   
               });

               if(action != DateTimePicker.dismissedAction){
                   setDateTime(`${hour}:${minute}`);
                   save(format(new Date(2020,12,1,hour,minute),'HH:mm:ss'));
               }
              
            }
        
    }
    
    return(
        <TouchableOpacity onPress={selectDataOrHour} >
            <TextInput style={styles.input}
            placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora'}
            editable={true} value={datetime}/>
            <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconClock}/>
        </TouchableOpacity>
    );
}
