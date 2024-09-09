import { View, Text, Image,TextInput } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { Colors } from '../../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {

    const {user} = useUser();

  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
        <Image 
        source={{uri:user?.imageUrl}}
        style={{
            width:45,
            height:45,
            borderRadius:99
        }}></Image>
        <View>
            <Text style={{
                color:'#fff',
            }}>Welcome,</Text>
            <Text style={{
                fontFamily:'outfitM',
                fontSize:19,
                color:'#fff'
            }}>{user?.fullName} </Text>
        </View>
      </View>
      <View style={{
          display:'flex',
          flexDirection:'row',
          gap:10,
          alignItems:'center',
          backgroundColor:'#fff',
          padding:10,
          marginVertical:10,
          marginTop:15,
          borderRadius:8
      }}>
      <EvilIcons name="search" size={24} color={Colors.PRIMARY} />
      <TextInput placeholder='Search...'
        style={{
            fontFamily:'outfitR',
            fontSize:16
        }}></TextInput>
      </View>
    </View>
  )
}