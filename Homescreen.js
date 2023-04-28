import React, { Component } from "react";
import { Button, View, Text,Image,TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
    <Text style={{fontSize:20,fontWeight:'bold',marginTop:30}}> TATA IPL INFORMATION IN 2023</Text>
    <Image style={{ width:'20%',height:'40%',marginTop:20}}
       source={{
        uri:'https://imgeng.jagran.com/images/2022/dec/IPL2023auctionlive1671810458241.jpg',
      }}/>
     <View>
     <TouchableOpacity style={{backgroundColor:'red',padding:15,borderRadius:10,marginTop:30}}
        onPress={() => {
              navigation.navigate('About');
              
        }}>
          <Text style={{fontSize:15,fontWeight:'600'}}>Learn more</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}