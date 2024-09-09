import { View, Text, ActivityIndicator,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { Colors } from './../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Review from '../../components/BusinessDetail/Review';

export default function BusinessDetail() {

  const { businessid } = useLocalSearchParams();
  const [businessdetail, setBusinessDetail] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, [])

  // Used to get BusinessDetail By ID
  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, 'BusinessList', businessid)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBusinessDetail({id:docSnap.id ,...docSnap.data()});
      setLoading(false);

    } else {
      console.log("No such document! ");
      setLoading(false);

    }

  }
  return (
    <ScrollView > 
     {loading ?
      <ActivityIndicator
      style={{
        marginTop:'70%'
      }}
        size={'large'}
        color={Colors.PRIMARY}/>:
      <View>
        {/* Intro  */}
       {businessdetail && <Intro business = {businessdetail}></Intro>}
        {/* Action Button  */}
        <ActionButton business = {businessdetail}></ActionButton>
        {/* About Section */}
        <About business={businessdetail}></About>
        {/* Review Section */}
        <Review business={businessdetail} />
      </View>
      }
    </ScrollView>
  )
}