import React from 'react';

import { connect } from 'react-redux';
import { Text, StyleSheet } from "react-native";


const state = (state) => {
  return { stateProps: state};
};


const ForecastChoseCityConnect = ({stateProps})=> {
    //TODO REGLER LE FORMAT DATE
    return (
      <>
        <Text style={styles.titleText}>{stateProps.forecast.location.name}</Text >
        <Text style={styles.bodyText}>{stateProps.forecast.location.localtime}</Text >
      </>
    )

}

 const styles = StyleSheet.create({
    titleText: {
      fontFamily: 'montserrat',
      color:'#fff',
      fontSize: 60,
    },
    bodyText:{
      fontFamily: 'montserrat',
      color:'#fff',
      fontSize: 20
    }
  });


const ForecastChoseCity = connect(state)(ForecastChoseCityConnect)
export default ForecastChoseCity;
