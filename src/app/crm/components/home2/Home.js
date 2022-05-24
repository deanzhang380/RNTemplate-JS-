


import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';


export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:"#eee"}}>
          <Text  > Home 2! WifiAttendance</Text>

          <Button
            title="Go to WifiAttendance"
            onPress={() => {
            
            }}
          />
          <Button
            title="Go to RMIT App"
            onPress={() => {
              
            }}
          />
           <Button
            title="Go to ETMS App"
            onPress={() => {
              
            }}
          />
          <Button
            title="Go to eLearning App"
            onPress={() => {
            
            }}
          />
          <Button
            title="Go to BA Online App"
            onPress={() => {
             
            }}
          />
           <Button
            title="Go to FIS App"
            onPress={() => {
             
            }}
          />
          
        </View>

      </SafeAreaView>
    );
  }
}