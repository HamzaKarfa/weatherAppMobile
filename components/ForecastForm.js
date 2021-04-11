import React from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from "../actions/index";
import { SafeAreaView,
         StyleSheet,
         View,
         TextInput, 
         TouchableOpacity,
         Text} from "react-native";

import Icon from 'react-native-vector-icons/Feather'; //Search icon with this link https://oblador.github.io/react-native-vector-icons/


const stateForecastFormConnect = (state) => {
  return { stateProps: state};
};

const dispatchForecastFormConnect =(dispatch) =>{
  return {
      fetchForecastFunction: (villeName) => { dispatch(fetchForecast(villeName)) }
    }
 };


const ForecastFormConnect = ({stateProps,fetchForecastFunction})=> {
    const [ville, setVille] = React.useState("");
    function sendAction(){
      if (!ville.length == 0) {
        fetchForecastFunction(ville)
        setVille('')
      }
    
    }
    return (
      <SafeAreaView style={styles.container} onSubmit={(e) =>{e.preventDefault(), sendAction()}} >
        <View style={styles.row}>
            
            <TouchableOpacity 
                style={styles.button}
                onPress={sendAction}>
                  <Icon name='search' size={30} color='gray' />
                </TouchableOpacity>
            
            
            <TextInput placeholder="Rechercher une ville"
                        placeholderTextColor="gray" 
                        focusable
                        style={styles.input}
                        onChangeText={(ville)=> setVille(ville)}
                        value={ville}
    
                          />
        </View>
      </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
    },
    row:{
      width: '90%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      padding:10,
      borderRadius:10,
      backgroundColor:'rgba(255,255,255,0.8)',
      color:'gray',
    },
    button: {
      alignItems: "center",
      justifyContent:'center',
      color:'gray',
      width: '20%',

    },
    input: {
        height: 40,
        width: '80%',
        color:'#000',
        fontFamily: 'montserrat'
    }
  });

const ForecastForm = connect(stateForecastFormConnect,dispatchForecastFormConnect)(ForecastFormConnect)


export default ForecastForm;
