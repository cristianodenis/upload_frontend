//import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        
    },
    filter:{
        flexDirection: 'row',
        width: '100%',
        //distribui por igual
        justifyContent: 'space-around',
        height:70,
        alignItems: 'center'
    },
    filterTextActived:{
       fontWeight: 'bold',
       fontSize: 18,
       color: '#EE6B26' 
    },
    filterTextInative:{
        color: '#20295F',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5,
    },
    title:{
        width: '100%',
        //deixar uma linha
        borderBottomWidth:1,
        borderColor:'#20295f',
        alignItems: 'center',
        marginBottom:20
    },
    titleText:{
       color: '#20295f', 
       fontSize:18,
       fontWeight: 'bold',
       position: 'relative',
       top:11,
       backgroundColor: '#FFF',
       paddingHorizontal:10
    }
});

export default styles;