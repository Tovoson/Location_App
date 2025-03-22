import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import dashboardStyle from './style.js';
// import fakeAppartement from '../../fakeData/fakeActivity.js'

const HomeScreen = () => {
  console.log(fakeAppartement)
  return (
    <ScrollView>
      {/* Header */}
      <View 
      style={dashboardStyle.header}
      >
        <Text style={dashboardStyle.userNom}>Ely Tovoniaina</Text>
        <Image 
          source={require('../../assets/sary_tapaka.jpg')} 
          style={dashboardStyle.userImage}
        />
      </View>

      <FlatList
        horizantal={true}
        // data={fakeAppartement}
        keyExtractor={item => item.num_App}
        renderItem={
          ({item})=>{
            return(
              <View>
                <Text>{item.design}</Text>
              </View>
            )
          }
        }
      />

    </ScrollView>
  )
}

export default HomeScreen