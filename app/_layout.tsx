
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator,Text} from "react-native";
import LoginScreen from '../components/LoginScreen';
import * as SecureStore from 'expo-secure-store';


const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function RootLayout() {
 
 const [loaded] = useFonts({
    'outfit':require('../assets/fonts/Outfit-Bold.ttf'),
    'outfitM':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfitR':require('../assets/fonts/Outfit-Regular.ttf'),
  });

  if(!loaded){
   return <ActivityIndicator  size="large" color="#00ff00"></ActivityIndicator> ;
    
  }
  return (
   <ClerkProvider  tokenCache={tokenCache} 
   publishableKey="pk_test_aW5ub2NlbnQtcmF2ZW4tOTQuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <SignedIn>
    <Stack screenOptions={{headerShown:false}}>   
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen></LoginScreen>
    </SignedOut>
    </ClerkProvider>   
  );
}
