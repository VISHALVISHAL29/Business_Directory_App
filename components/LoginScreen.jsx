
import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import{useWarmUpBrowser} from '../hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from "expo-linking"

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);

  return (
    <View>
        <View style={{
           display:'flex',
           alignItems:'center',
           marginTop:100
        }}>
        <Image source ={require('../assets/images/login.png')}
        style={{
            width:220,
            height:450,
            borderRadius:20,
            borderWidth:6,
            borderColor:'#000'}} />
        </View>

        <View style={styles.subContainer}>
           <Text style={{
            fontSize:25,
            fontFamily:'outfit',
            textAlign:'center'
           }}>Your Ultimate 
            <Text style={{
                color:Colors.PRIMARY
            }}> Community Business Directory App</Text></Text> 
            <Text style={{
                fontSize:12,
                fontFamily:'outfitR',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY
            }}>find your favourite business near you and post your own business to your community</Text>
           
           <TouchableOpacity style={styles.btn}
           onPress={onPress}>
              <Text style={{
                textAlign:'center',
                color:'#fff',
                fontFamily:'outfitR'
              }}>
                Let's Get Started</Text>
           </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#fff',
        padding:20,
        marginTop:-20
    },
    btn:{
     backgroundColor:Colors.GRAY,
     padding:16,
     borderRadius:99,
     marginTop:2
    }
})