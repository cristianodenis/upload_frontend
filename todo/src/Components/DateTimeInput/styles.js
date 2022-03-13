import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        fontSize: 20,
        fontWeight: 'bold',
        padding:10,
        width: '95%',
        borderBottomWidth:1,
        borderBottomColor: '#EE6B26',
        marginHorizontal:10
    },
    iconTextInput:{
        position: 'absolute',
        left: '90%',
        top: 15,
        width: 25,
        height:25,
        //se ajusta ao container
        resizeMode: 'contain',
      
    }
})

export default styles;