/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   TextInput,
   useColorScheme,
   View,
   ImageBackground,
   Image
 } from 'react-native';
 import Forecast from './components/Forecast';
 import { connect } from 'react-redux';



 const state = (state) => {
  return { stateProps: state};
};

 const AppConnect = ({stateProps}) => {
  function displayImgSrc(){
    if (stateProps.backgroundImage !== null) {
      return { uri : stateProps.backgroundImage }
    }else{
      return require("./assets/images/weather.png")
    }
  }
 
   return (
     <View style={styles.sectionContainer}>
       <ImageBackground  
         source={displayImgSrc()} 
         style={styles.image} >
           <View style={styles.sectionContainer}>
             <Forecast/>
           </View>
       </ImageBackground> 
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     height: '100%',
     fontFamily: 'Montserrat'
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   image: {
     width: '100%',
     height: '100%'
 
  
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 
 const App = connect(state)(AppConnect)
 export default App;
 