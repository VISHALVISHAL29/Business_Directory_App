import { View, Text,StyleSheet, TextInput, TouchableOpacity, ToastAndroid, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Rating } from '@kolking/react-native-rating'
import { Colors } from '../../constants/Colors';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

export default function Review({business}) {
  const [rating, setRating] = useState(0);
  const [userInput,setUserInput]=useState();
  const {user} = useUser();

  const onSubmit = async()=>{
    const docRef=doc(db,'BusinessList',business.id)
    await updateDoc(docRef,{
        review:arrayUnion({
          rating:rating,
          comment:userInput,
          userName:user?.fullName,
          userImage:user?.imageUrl

        })
    })
    ToastAndroid.show('Comment Added Successfully ',ToastAndroid.BOTTOM)
  }

  const handleChange = useCallback(
    (value) => setRating(Math.round((rating + value) * 5) / 10),
    [rating],
  );
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
    }}>
      <Text style={{
        fontFamily:'outfit',
        fontSize:20,
      }}>  Review </Text>
      <View style={styles.root}>
      <Text style={styles.text}>Rated {rating} out of 5</Text>
      <Rating style={{marginTop: 10,}}size={40} rating={rating} onChange={handleChange} />
    </View>
      <TextInput 
        placeholder='Write your feedback'
        onChangeText={(value)=>{setUserInput(value)}}
        multiline={true}
        style={{
          marginTop:20,
          borderWidth:1,
          padding:10,
          borderRadius:10,
          textAlignVertical:'top',
        }}></TextInput>
        <TouchableOpacity
        disabled={!userInput}
        onPress={onSubmit}
        style={{
          padding:10,
          backgroundColor:Colors.PRIMARY,
          borderRadius:6,
          marginTop:10
        }}>  
        <Text style={{
          fontFamily:'outfitR',
          color:'#fff',
          textAlign:'center'
        }}>
          Submit
        </Text>
        </TouchableOpacity>
        
        <View>
          {business?.review?.map((item,index)=>(
            <View>
              <Image source={{uri:item?.userImage}} 
                style={{
                  width:50,
                  height:50,
                  borderRadius:99
                }}></Image>
              <Text>{item.comment}</Text>
            </View>
          ))}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    color:'#FFD700'
  },
});