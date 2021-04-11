import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';


import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import { connect } from 'react-redux';

const state = (state) => {
  return { stateProps: state};
};

const ForecastConnect = ({stateProps})=> {

    function displayContent(){
      if (!stateProps.loader && stateProps.forecast != undefined) {
        return (<>
          <ForecastTitle/>
          <ForecastResult/>
          </>)
      } else {
        return (
          <View style={styles.text} >
              <Text  style={styles.text}>tdest</Text>
          </View>
        )
      }
    }

      return (
        <View style={styles.container}>
            {displayContent()}
            <View style={styles.bottom}>
              <ForecastForm/>
            </View>
        </View>
      )

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:100
  },
  bottom: {
    position:'absolute',
    bottom: 0,
    height: '15%',
    width: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  text: {
    fontSize: 60,
    fontFamily: 'montserrat', 
  }
});
const Forecast = connect(state)(ForecastConnect)
export default Forecast;
