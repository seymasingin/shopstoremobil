import React from "react";
import { Text, View, SafeAreaView, Image, Dimensions } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
    return(
    <SafeAreaView style= {styles.container}>
        <View style= {styles.logo_container}>
        <Image style= {styles.logo} source={require("../assets/login.png")}/>
        </View>
        
        <View style= {styles.body_container}>
        <Input placeholder="username"/>
        <Input placeholder= "password"/>
        <Button text= "Login" />
        <Text> dükkan</Text>
        </View>

    </SafeAreaView>
    )
}

export default Login;

const styles = {
    container:{flex:1},
    logo:{
        height: Dimensions.get("window").height / 4,
        width: Dimensions.get("window").width,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "gray"
    }
} 