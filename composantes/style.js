import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    input:{
        width: 350,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5

    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        width: '100%',
        minHeight: 500,
        gap: 5
    },
    btn:{
        padding: 5,
        margin: 5,
        alignItems: 'center',
        width: '93%',
        backgroundColor: 'green',
        borderRadius: 5
        
    }
})