import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        backgroundColor: '#20295F',
        //parte inferior borderBottomWidth
        borderBottomWidth:5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:115,
        height:50,
    },
    notification:{
       position: 'absolute',
       right: 20,
    },
    notImage:{
       width: 30,
       height: 30,
      
    },
    circle:{
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom:13

    },
    notText:{
      fontWeight: 'bold',
      color: '#EE6B26',
     
    },
    leftIcon:{
      position: 'absolute',
      left: 20
    },
    leftImage:{
        width: 30,
        height: 30

    }

});

export default styles;