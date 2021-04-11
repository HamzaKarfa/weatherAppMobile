import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
  } from 'react-native';


import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { stateProps: state};
};

const ForecastConnect = ({stateProps})=> {

    function displayContent(){
      if (!stateProps.loader && stateProps.forecast != undefined) {
        return (
          <>
            <ForecastTitle/>
            <ForecastResult/>
          </> 
        )
      } else {
        return (
          <View style={styles.content}>
              <ActivityIndicator style={styles.content} size={100} color="#fff9"  />
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
    height:'100%'
  },
  content:{
    height:'100%',
    width:'100%'
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
const Forecast = connect(mapStateToProps)(ForecastConnect)
export default Forecast;
