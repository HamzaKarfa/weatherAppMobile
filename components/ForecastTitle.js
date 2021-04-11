import React from 'react';
import ForecastChoseCity from './ForecastChoseCity';
import { View ,StyleSheet } from 'react-native';
const ForecastTitle = ()=> {

    return (
      <View  style={styles.container} >
        <ForecastChoseCity/>
      </View>
    )

}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

  }, 
})
export default ForecastTitle;
