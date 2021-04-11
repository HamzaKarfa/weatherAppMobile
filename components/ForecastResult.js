import React from 'react';
import { connect } from 'react-redux';
import {SafeAreaView, View, Text, Image , StyleSheet} from 'react-native';

//Search icon with this link https://oblador.github.io/react-native-vector-icons/
import {default as IconFeather} from 'react-native-vector-icons/Feather'; 
import {default as IconIonicons} from 'react-native-vector-icons/Ionicons'; 
    
const mapStateToProps = (state) => {
  return { stateProps: state};
};

const ForecastResultConnect = ({stateProps})=> {

    return (
        <SafeAreaView style={[styles.container, styles.row]}>

            <View style={[styles.card, styles.col , {justifyContent:'space-around'}]} >
                <View style={[styles.cardHeader,styles.row,]} >
                    <View style={[styles.col, {width:'40%', height:'100%'} ]}>
                        <Image 
                            style={styles.logo}
                            source={{  uri: stateProps.forecast.current.weather_icons[0] }}
                        /> 
                    </View>
                    <View style={[styles.col, {width:'60%', height:'100%'} ]}>
                        <Text style={[styles.text,  styles.secondaryColor]}>{stateProps.forecast.current.weather_descriptions[0]}</Text>
                    </View>
                </View>
      
        
                <View style={[styles.cardBody, styles.row, {justifyContent:'space-around'}]} >
                    <Text style={[styles.col, styles.text ,styles.title, styles.secondaryColor,{ width:'60%',}]}>
                        {stateProps.forecast.current.temperature}°C
                    </Text>
        
                    <View style={[styles.col,{width:'40%'}]}>
                        <Text style={[styles.text,styles.primaryColor]}> min {stateProps.forecast.current.temperature -2}°C</Text>
                        <Text  style={[styles.separate, styles.primaryColor]} ></Text>
                        <Text style={[styles.text,styles.primaryColor]}> max {stateProps.forecast.current.temperature +2}°C</Text>
                    </View>
                </View>
                <View style={[styles.cardFooter, styles.row, {justifyContent:'space-between'}]} >
                    <View style={styles.row} >
                        <IconFeather  name='wind' size={30} color='#fff' style={{paddingHorizontal:10}} />
                        <Text style={[styles.text, {color:'#fff'}]}>{stateProps.forecast.current.wind_speed}km/h</Text>
                    </View>

                    <View style={styles.row} >
                        <IconIonicons name='water-outline' size={30} color='#fff' style={{paddingHorizontal:10}}  />
                        <Text style={[styles.text, {color:'#fff'}]}>{stateProps.forecast.current.humidity}%</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        height: '55%',
        width: '100%'
      },
    card: {
        width: '90%',
        height: '60%',
        padding:10,
        borderRadius:8,
        backgroundColor:'rgba(255,255,255,0.8)',
    },
    cardHeader : {
        width: '100%',
        height:'30%',

    },
    cardBody : {
        width: '100%',
        height:'70%',

    },
    cardFooter : {
        width: '100%',
        borderRadius:8,
        backgroundColor: "#404491",
        width: "100%",
        position:'absolute',
        padding: 15,
        bottom:-30
    },
    separate: {
        borderWidth:1,
        height:0,
        width:'80%',
        borderColor:'#707070'
    },
    logo: {
        width: '50%',
        height: '100%',
    },
    col:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    row:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    text:{
        fontFamily:'montserrat',
        fontSize:20
    },
    secondaryColor:{
        color:'#404491'
    },
    primaryColor:{
        color:'#707070'
    },
    title:{
        fontSize:64,
        textAlign:'center'

    }

  });

const ForecastResult = connect(mapStateToProps)(ForecastResultConnect)

export default ForecastResult;
