import { StyleSheet } from 'react-native'


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

  export default styles