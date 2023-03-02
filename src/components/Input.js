import React from "react";
import {View, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({placeholder, onType, value, iconName}) => {
    return(
        <View style= {styles.container}>
            <TextInput style={styles.input}
                        placeholder={placeholder} 
                        onChangeText= {onType} 
                        value={value}/>
            <Icon style={styles.icon} name={iconName} size={20} />
        </View>
    )
}

export default Input;

const styles ={
    container:{
        flexDirection: "row",
        padding:5,
        margin:10,
        backgroundColor: "#add8e6", 
        borderRadius:8,
        height: 50          
        },
    input:{
        flex:1,  
    },
    icon:{
        margin:10,
        color:"black"
    }

}