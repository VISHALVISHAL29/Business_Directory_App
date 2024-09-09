import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection,  getDocs,  limit,  query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

    const[businesslist,setBusinesslist] = useState([])

    useEffect(()=>{
        GetBusinessList();
    },[])
 
    const GetBusinessList=async()=>{
        setBusinesslist([]);
        const q = query(collection(db,'BusinessList'))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            // console.log(doc.data());
           setBusinesslist(prev => [...prev,doc.data()]);
        })
    }

  return (
    <View>
      <View style={{padding:20,display:'flex',flexDirection:'row',
                  justifyContent:'space-between',marginTop: 10, }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit'
                }}>
                    Popular Business
                </Text>
                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily:'outfitM'
                }}>
                    View all </Text>
            </View>

            <FlatList 
            horizontal={true}
            data={businesslist}
            renderItem={({item,index})=>(
                <PopularBusinessCard 
                business = {item}></PopularBusinessCard>
            )}
            contentContainerStyle={{ paddingLeft: 10}} />
        

    </View>
  )
}