import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionButton({business}) {

    const actionButton= [
        {
            id:1,
            name : 'Call',
            icon: require('./../../assets/images/call.jpeg'),
            url:'tel:'+business?.contact
        },
        {
            id:2,
            name : 'Location',
            icon: require('./../../assets/images/location.jpeg'),
            url:'https://www.google.com/maps'+business?.address
        },
        {
            id:3,
            name : 'Web',
            icon: require('./../../assets/images/web.jpeg'),
            url:business?.website
        },
        {
            id:4,
            name : 'Share',
            icon: require('./../../assets/images/share1.jpeg'),
            url:'tel:'+business?.contact
        }
    ]

    const OnPressHandler = (item)=>{
        if(item.name == 'share'){
            return;
        }
        Linking.openURL(item.url);
    }

  return (
    <View style={{
        backgroundColor:"#fff",
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    }}>
    {actionButton.map((item,index)=>(
        <TouchableOpacity key={index}  
          onPress={()=>OnPressHandler(item)} >
            <Image 
              source={item?.icon}
              style={{
                width:50,
                height:50,
              }}/>
              <Text style={{
                fontFamily:'outfitR',
                textAlign:'center',
                marginTop:3
              }}>{item?.name}</Text>
        </TouchableOpacity>
       ))}
    </View>
  )
}