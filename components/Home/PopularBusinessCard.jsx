import { View, Text, StyleSheet, Dimensions,Image} from 'react-native'
import React from 'react'
import { Card } from '@rneui/base'
import { CardTitle } from '@rneui/base/dist/Card/Card.Title'
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import { CardBase } from '@rneui/base/dist/Card/Card';
import { Colors } from '../../constants/Colors';


export default function PopularBusinessCard({business}) {
  return (
    <View style={style.container}>
      <Card containerStyle={style.cardContainer} >
        <CardTitle style={style.titleStyle}>{business?.name}</CardTitle>
        <CardDivider/>
        <CardImage
        source={{uri:business?.imageURL}}
        style={{
          width:200,
          height:130,
          resizeMode:'stretch',
          margin:10
        }}></CardImage>
        <Text style={{
          fontSize:10,
          fontFamily:'outfitM'
        }}>Contact : {business?.contact}</Text>
        <Text style={{
          fontSize:10,
          fontFamily:'outfitM',
          marginBottom:10
        }}>Address : {business?.address}</Text>

        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <View  style={{
          display:'flex',
          flexDirection:'row',
          gap:2
        }}>
            <CardImage source={require("./../../assets/images/Star.png")}
            style={{
              width:20,
              height:20
            }}></CardImage>
            <Text style={{fontFamily:'outfitM'}}> 4.5 </Text>
          </View>
          <Text style={{
            fontFamily:'outfitM',
            backgroundColor:Colors.PRIMARY,
            color:'#fff',
            padding:3,
            fontSize:10,
            borderRadius:5,
            marginRight:-10
          }}>{business?.category}</Text>
        </View>
      </Card>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1
  },
  cardContainer: {
    width: 250,
    height:290, 
    marginTop: -10, 
    } ,
    titleStyle:{
      fontSize:20,
      fontFamily:'outfitR'
    }

});