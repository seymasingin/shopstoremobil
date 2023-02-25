import React from "react";
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

function ProductCard({product, onSelect}) {
    return(
        <TouchableWithoutFeedback onPress= {onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.image}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}> {product.title}</Text>
                <Text style={styles.price}> {product.price} TL</Text>
            </View >
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ProductCard;

const styles ={
    container:{
        borderColor: "#bdbdbd",
        borderWidth: 1,
        backgroundColor:"#eeee",
        margin:10,
        flexDirection: "row",
    },

    image:{
        width:100,
        minHeight:100,
        resizeMode: "contain",
        backgroundColor: "white",
    },

    body_container:{
        padding:5,
        flex: 1,
        justifyContent: "space-between",
    },
    title:{
        fontWeight: "bold",
        fontSize: 15,
    },
    price:{
        textAlign: "right",
        fontSize: 15
    }

}
