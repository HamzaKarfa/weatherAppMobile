/**
 * @format
 */

 import React from 'react';
 import App from './App';
 import { name as appName } from './app.json';
 import { Provider } from 'react-redux';
 import { AppRegistry } from 'react-native';
 
 import store from './store/index';
 import GlobalFont from 'react-native-global-font';

 
 function componentDidMount() {
   let fontName = 'monserrat'
   GlobalFont.applyGlobal(fontName)
 }
 componentDidMount() 
 const RNRedux = () => (
   <Provider store = { store }>
     <App />
   </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => RNRedux);