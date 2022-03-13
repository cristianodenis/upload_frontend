import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 container:{
     flex:1,
     backgroundColor: '#FFF',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
 },
 imageIcon:{
    width: 40,
    height: 40,
    marginHorizontal:10,
    marginTop:10
    
},
label:{
    color: '#707070',
    fontSize: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
},
input:{
    fontSize:20,
    padding: 10,
    width: '90%',
    borderBottomWidth:1,
    borderBottomColor: '#EE6B26',
    marginHorizontal: 10,
    marginBottom:10,
    color: 'coral'
},
inputarea:{
    fontSize:20,
    padding: 10,
    width: '90%',
    height: 100,
    marginBottom:10,
    borderWidth:1,
    borderColor: '#EE6B26',
    marginHorizontal: 10,
    borderRadius:10,
    textAlignVertical: 'top',
    color: 'coral'
},
inLine:{
  width:'100%',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'space-between',
  padding:10,
},
inputInline:{
   flexDirection: 'row',
   alignItems: 'center',
   marginVertical:10 ,
},
switchLabel:{
   fontWeight:'bold',
   color: '#EE6B26',
   textTransform: 'uppercase',
   fontSize: 16,

},
removeLabel:{
   fontWeight:'bold',
   color: '#20295F',
   textTransform: 'uppercase',
   fontSize: 16,
},
typeIconInative:{
    opacity: 0.5
}

});

export default styles;