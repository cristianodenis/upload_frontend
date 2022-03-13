import React, {useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';

import styles from './styles';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import * as Network from 'expo-network';
import { NavigationContainer } from '@react-navigation/native';

export default function Qrcode(){
    const Navigation = useNavigation();
    const [hasPermission,setHasPermission] = useState(null);
    const [scanned,setScanned] = useState();

    async function getmacaddress(){
        await Network.getIpAddressAsync().then(mac =>{
           Alert.alert(`Seu número é: ${mac}`);
         })
      }

      useEffect(()=> {
       (async () =>{
           const {status} = await BarCodeScanner.requestPermissionsAsync();
           setHasPermission(status === 'granted');
       })();

    },[])
    
    const handleBarCodeScanned = ({data}) => {
        setScanned(true);
        if(data == 'getmacaddress')
        getmacaddress();
        else
        alert('Qrcode Inválido!')
    };

    return(
        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
             style={StyleSheet.absoluteFillObject}/>

             <View style={styles.header}>
                <Text style={styles.headerText}>Conectar com minha conta na web</Text>
             </View>

             <View style={styles.containerButtons}>
                 <TouchableOpacity style={styles.buttonBack} onPress={()=> Navigation.navigate('Home')}>
                     <Text style={styles.textButton}>Voltar</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={scanned ? styles.buttonScanActive : styles.buttonScanInative} onPress={()=> setScanned(false)}>
                     <Text style={styles.textButton}>Scan Novamente</Text>
                 </TouchableOpacity>
             </View>
        </View>

    );
}