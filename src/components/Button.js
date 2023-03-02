import React from "react";
import {TouchableOpacity, Text, ActivityIndicator} from "react-native";

const Button = ({text, onPress, loading}) => {
    return(
        <TouchableOpacity style= {styles.container} onPress={onPress} disabled={loading}>
            {loading ?
            (<ActivityIndicator/>)
            :(<Text style= {styles.title}>{text}</Text>)}
        </TouchableOpacity>
    )
};


export default Button;


const styles = {
    container:{
        padding:5,
        margin:10,
        backgroundColor: "#dcdcdc", 
        borderRadius:8,
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
    }
}