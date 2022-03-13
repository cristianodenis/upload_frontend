import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { format } from 'date-fns';
import styles from './styles';

console.disableYellowBox=true;

import {useNavigation} from '@react-navigation/native';


//COLEÇÃO DE ICONES
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({done,title,when,typeIcon,description,id}){
    const navigation = useNavigation();
    const data = format(new Date(when),'dd/MM/yyyy');
    const hora = format(new Date(when),'HH:mm');
    
    return(
        <View>
           <TouchableOpacity style={[styles.card, done && styles.done]} onPress={()=> navigation.navigate('Task',{done:done,title:title,data:data,hora:hora,type:typeIcon,description:description,id:id,when:when})} >
               <View style={styles.cardLeft}>
                   <Image source={typeIcons[typeIcon]} style={styles.typeActive}/>
                   <Text style={styles.cardTitle}>{title}</Text>
               </View>
               <View style={styles.cardRight}>
                   <Text style={styles.cardDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                   <Text style={styles.cardTime}>{format(new Date(when),'HH:mm')}</Text>
              </View>
           </TouchableOpacity>
        </View>
    );
}