import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

export default function Home() {
  return (
    <ScrollView  style={{
      flexGrow:1
    }}>
      <View  style={{
        flex:1,
      paddingBottom: 10
    }}>
       <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <PopularBusiness></PopularBusiness>
      </View>
    </ScrollView>
  )
}