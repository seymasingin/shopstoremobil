import React from "react";
import {View, TextInput} from "react-native";

const Input = ({placeholder, onType}) => {
    return(
        <View style= {styles.container}>
            <TextInput placeholder={placeholder} onChangeText= {onType} />
        </View>
    )
}

export default Input;

const styles ={
    container:{
        padding:5,
        margin:10,
        backgroundColor: "#add8e6", 
        borderRadius:8           
        },

}