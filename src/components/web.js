import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
class MyWeb extends React.Component {
    constructor(props) {
        super(props);
        
      }

  render() {
    return (
      
           
          <WebView
        source={{uri: 'https://google.com'}}
        style={{marginTop: 20}}
        startInLoadingState='true'
      />
       
     
    );
   
  }
}
export default MyWeb;