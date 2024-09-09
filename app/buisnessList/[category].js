import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';

export default function BusinessListByCategory() {
    
  const navigation = useNavigation();

  const {category} = useLocalSearchParams();

  const[businessList,setBusinessList]=useState([])
  const[loaidng,setLoading] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTitle:category   
    })
    getBusinessList();
  },[])

  /**Used to get busines list by category  */

  const getBusinessList = async()=>{
    setBusinessList([])
    setLoading(true);
    const q = query(collection(db,'BusinessList'),where('category','==',category))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
      setBusinessList(prev=>[...prev,{id:doc?.id,...doc.data()}]);
    })

    setLoading(false);
  } 

  return (
    <View>
    {businessList.length>0 && loaidng==false?
    <FlatList data={businessList}
      onRefresh={getBusinessList}
      refreshing={loaidng}
      renderItem={({item,index})=>(
        <BusinessListCard 
         business={item}
         key={index}/>
      )}/>:
      loaidng?<ActivityIndicator
       style={{
        marginTop:'60%'
       }}
            size={'large'}
            color={Colors.PRIMARY}/>:
      <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        color:Colors.GRAY,
        textAlign:'center',
        marginTop:'50%'
      }}>
        No Business Found
      </Text>}
    </View> 
  )
}