import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

//ICONES
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({showNotification,showBack,mudarFiltro,qntAtrasadas}){
 const navigation = useNavigation();
    return(
        <View style={styles.header}>
             { showBack ?
             <TouchableOpacity style={styles.leftIcon} onPress={()=> navigation.navigate('Home')}>
              <Image source={back} style={styles.leftImage}/>
            </TouchableOpacity>
              :
            <TouchableOpacity style={styles.leftIcon} onPress={()=> navigation.navigate('Qrcode')}>
              <Image source={qrcode} style={styles.leftImage}/>
            </TouchableOpacity>
            }
            
            <Image source={logo} style={styles.logo}/>
            
            {showNotification && qntAtrasadas > 0 &&
                //verificado se a notificação
                <TouchableOpacity style={styles.notification} onPress={mudarFiltro}>
                    <Image source={bell} style={styles.notImage}/>
                    <View  style={styles.circle}>
                        <Text style={styles.notText}>{qntAtrasadas}</Text>
                    </View>
                </TouchableOpacity>
           }
        </View>
    );
}