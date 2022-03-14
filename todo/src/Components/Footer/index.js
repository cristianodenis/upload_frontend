import React, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

   // id já está aqui

import styles from './styles';
import add from '../../assets/add.png';
import save from '../../assets/save.png';

export default function Footer({icon,macaddress,type,title,description,data,hora,dt,id,done}){
    const navigation = useNavigation();
    const [date,setDate] = useState(data);
    const [hour,setHour] = useState(hora);
    const [load,setLoad] = useState(true);

    async function New(){
        if(!type)
        return alert('DEFINA O TIPO DA TAREFA')
        if(!title)
        return alert('DEFINA O TÍTULO DA TAREFA')
        if(!description)
        return alert('DESCREVA A TAREFA')
        
        if(id == null){
        if(!dt)
        return alert('DEFINA A DATA DÁ TAREFA')
        if(!hora)
        return alert('DEFINA O HORÁRIO DÁ TAREFA')
        }

        {
            id != null ?
           await api.put(`/tarefa/${id}`,{
           macaddress: macaddress,
           type: type,
           title: title,
           description: description,
           when: data,
           done: done
           })
           .then(()=>{
            navigation.navigate('Home'); 
         })
         .catch(()=>{
             alert('API: ' +api);
             alert('DATA OU HORA JÁ CADASTRADOS VERIFIQUE!');
         })

         :

          await api.post('/tarefa',{   
          macaddress: macaddress,
          type: type,
          title: title,
          description: description,
          when: data,
          done: done
          })
          .then(()=>{
            navigation.navigate('Home');
         })
         .catch(()=>{
             alert('DATA OU HORA JÁ CADASTRADOS VERIFIQUE!');
         })
       }
    
    }

    return(
        //navigation.navigate('Task',{icon:icon})
        <View style={styles.container}>
            {
                icon == 'add' ?
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Task',{icon:icon})}>
                <Image source={icon == 'add' ? add : save} style={styles.image}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.button} onPress={()=> New()}>
                <Image source={icon == 'add' ? add : save} style={styles.image}/>
            </TouchableOpacity>
            }
            <Text style={styles.text}>Organizando sua vida</Text>
        </View>
    );
}