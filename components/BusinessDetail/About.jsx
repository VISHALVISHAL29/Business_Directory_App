import { View, Text } from 'react-native'
import React from 'react'

export default function About({business}) {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
    }}>
      <Text style={{
        fontFamily:'outfit',
        fontSize:20
      }}>About</Text>
      <Text 
      style={{
        fontFamily:'outfitR',
        lineHeight:25
      }}>{business?.about}</Text>
    </View>
  )
}