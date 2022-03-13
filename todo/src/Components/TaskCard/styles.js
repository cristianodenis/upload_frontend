import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card:{
        borderEndWidth:1,
        marginBottom:10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 15, 
        width: 380,
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4 ,
        elevation: 5,
      },
    cardLeft:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardRight:{
       alignItems:'flex-end',
       justifyContent: 'space-between'
    },
    typeActive:{
       width:50,
       height:50,
    },
    cardTitle:{
       marginLeft: 10,
       fontWeight: 'bold',
       fontSize: 16 
    },
    cardDate:{
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16 
    },
    cardTime:{
        color: '#707070',
       fontWeight: 'bold',
       fontSize: 16 
    },
    done:{
        opacity: 0.5
    }
});

export default styles;