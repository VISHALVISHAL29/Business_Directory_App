import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CardImage } from '@rneui/base/dist/Card/Card.Image'
import { Card } from '@rneui/base'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function BusinessListCard({ business }) {

    const router = useRouter();
    return (
        <TouchableOpacity style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10, 
            padding: 10, 
            margin: 10, 
            borderRadius: 15, 
            backgroundColor: '#fff'
        }}
        onPress = {()=>router.push('/businessDetail/'+ business.id)}>
            <Image
                source={{ uri: business.imageURL }}
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 12,
                    borderColor: '#c0c0c0 '
                }}
            />
            <View style={{
                flex: 1,
                gap: 7
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 20
                }}>{business?.name}</Text>
                <Text style={{
                    fontFamily: 'outfitR',
                    color: Colors.GRAY,
                    fontSize: 15
                }}>{business?.address}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4
                }}>
                    <Image source={require("./../../assets/images/Star.png")}
                        style={{
                            width: 20,
                            height: 20
                        }} />
                    <Text style={{ fontFamily: 'outfitM' }}> 4.5 </Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}