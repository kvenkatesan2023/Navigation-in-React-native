import  { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Alert,Image,TouchableOpacity,onPress} from 'react-native';
import { SafeAreaView } from 'react-native-web';
export default function aboutScreen({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={{color:'',fontSize:30,fontWeight:'bold',marginTop:40,fontFamily:'arial'}}>TATA IPL INFORMATION IN 2023</Text>
        
        <View style={styles.container1}>
        <Image
          style={{
          width:'100%',
         height:'100%',
    
  }}
  source={{
    uri: 'https://imgeng.jagran.com/images/2022/dec/IPL2023auctionlive1671810458241.jpg',
  }}
/>
         
      </View>

      <View style={styles.container2}>
        <Text style={{color:'black',fontSize:15,fontFamily:'arial',textIndent:50,alignItems:'center',lineHeight:31,}}>The 2023 Indian Premier League also known as Tata IPL 2023 for sponsorship reasons and sometimes referred to as IPL 2023 or IPL 16 is the ongoing 16th season of the Indian Premier League, 
          a franchise Twenty20 cricket league in India. It is organised by the the TATA IPL for sponsorship reasons is a men's Twenty20 (T20) cricket league held annually in India and  Control for  during the IPL seasons.</Text>
      </View>
      <View style={styles.container3}>
      <TouchableOpacity style={{backgroundColor:'red',padding:15,borderRadius:10,marginTop:30}}
        onPress={() => {
              navigation.navigate('basket');
              
        }}>
          <Text style={{fontSize:15,fontWeight:'600'}}>Learn more</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
          flex:2,
          alignItems:'center',
          justifyContent:'flex-start',
          backgroundColor:`#87cefa`,
       

  },
  container1:{
      width:'30%',
     height:'40%',
     backgroundColor:'red', marginTop:'20px',
 


  },
  container2:{
    width:'30%',
    height:'30%',
    
     

  },
  button:{
    backgroundColor:'red',
    padding:10,
    borderRadius:10,
    
  }
 


});