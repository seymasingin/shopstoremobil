import React from "react";
import { Text, View, Image } from "react-native";
import useFetch from "../hooks/useFetch/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Dimensions } from "react-native";

const key= 'https://fakestoreapi.com/products'

function Detail({route}) {

    const {id} = route.params;
    const {data, loading, error} = useFetch(`${key}/${id}`)

    if (loading){
        return <Loading />
    }
    if (error) {
        return <Error/>
    }

    return(
    <View style={styles.container}>
        <Image style={styles.image} source ={{uri:data.image}}/>
        <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
        </View>
    </View>
    )
}

export default Detail;

const deviceSize= Dimensions.get("window");

const styles={
    container:{},
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: "contain",
        backgroundColor: "white"
    },
    body_container:{},
    title:{ fontWeight: "bold", fontSize:25},
    description:{fontStyle: "italic", marginVertical:5},
    price:{fontWeight:"bold", fontSize: 20, textAlign: "right"}
}
