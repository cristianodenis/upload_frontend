import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import * as Network from 'expo-network';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

//Componentes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TaskCard from '../../Components/TaskCard'; //já vem com os dados

//api
import api from '../../services/api';

export default function Home(){
    const navigation = useNavigation();
    //para amazenar o estado e atualizar o estado, criar uma const em fomar de vetor
    //pegar o estado com a função onPress,ex "filter" pega o valor e "setFilter" atualiza
    const [t,setT] = useState(true);
    const [filter,setFilter] = useState( t == true &&'all'); 
    const [tasks,setTasks] = useState([]); //recebe um array
    const [load,setLoad] = useState(true);
    const [notification,setNotification] = useState();
    const [macaddress,setMacaddress] = useState();

    //pegar o macaddress usa o network
    async function getmacaddress(){
        await Network.getIpAddressAsync().then(mac =>{
          setMacaddress(mac);
          setLoad(false);
         });
      }
     //setTasks está com todos os dados
    async function loadTasks(){
        setLoad(true);
       await api.get(`/tarefa/filter/${filter}/${macaddress}`)
       .then(response =>{
           setTasks(response.data) 
           setLoad(false);
       });
    }
       //pegando a quantidade de atividades atrazadas e carregando com useEffect
       async function loadCino(){
       await api.get(`/tarefa/filter/late/${macaddress}`)
       .then(response =>{
        setNotification(response.data.length)
       });

    }
    function cino(){
        setFilter('late');
    }

    useEffect(()=>{
        getmacaddress().then(()=>{
            loadTasks();
        });
        loadCino();
    },[filter,macaddress])

    return(
        <View  style={styles.container}>
          
            <Header showNotification={true} showBack={false} mudarFiltro={cino} qntAtrasadas={notification}/>

            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={ filter == 'all' ? styles.filterTextActived :styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={ filter == 'today' ? styles.filterTextActived :styles.filterTextInative}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={ filter == 'week' ? styles.filterTextActived :styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={ filter == 'month' ? styles.filterTextActived :styles.filterTextInative}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={ filter == 'year' ? styles.filterTextActived :styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter == 'late' && ' ATRASADAS'}</Text>
            </View>
               
              <ScrollView> 
                  {
                      load  
                      ?
                      <ActivityIndicator color='#EE6B26' size={50}/>
                      :
                    tasks.map(t =>
                     (
                      <TaskCard 
                      done={t.done} 
                      title={t.title} 
                      when={t.when} 
                      typeIcon={t.type} 
                      description={t.description}
                      id={t._id}
                      />
                     ))
                  }
              </ScrollView>
               
          <Footer icon={'add'}/>
          
        </View>
    );
}