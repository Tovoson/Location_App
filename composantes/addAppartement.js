import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'
import { style } from './style'
import * as SQLite from 'expo-sqlite'


const AddAppartement = () => {
    const [numApp, setnumApp] = useState('')
    const [design, setDesign] = useState('')
    const [loyer, setLoyer] = useState()

    const db = SQLite.openDatabaseAsync("appartement.db")

    const useEffect(() => {
      db.
    
      return () => {
        second
      }
    }, [])
    

    const ajouter = () =>{

        try {
            
            console.log(numApp)
            console.log(design)
            console.log(loyer)
            setDesign('')
            setLoyer('')
            setnumApp('')
            alert('ajout avec succès')
        } catch (error) {
            alert("Il y a un erreur")
        }
    }

  return (
    <View style={style.container}>
      <TextInput 
        value={numApp}
        onChangeText={setnumApp}
        placeholder="numéro de l'appartement"
        style={style.input}
        />
      <TextInput 
        style={style.input}
        value={design}
        onChangeText={setDesign}
        placeholder="Design"
        />
      <TextInput 
        style={style.input}
        value={loyer}
        onChangeText={setLoyer}
        placeholder="Loyer"
      />

    <TouchableOpacity
        style={style.btn}
        onPress={ajouter}
    >
        <MaterialCommunityIcons name="plus" color={'blue'} size={30} />
    </TouchableOpacity>
    </View>
  )
}

export default AddAppartement