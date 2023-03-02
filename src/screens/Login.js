import React from "react";
import { View, SafeAreaView, Image, Dimensions, Alert } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Formik } from "formik";
import usePost from "../hooks/usePost";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Login({navigation}) {

    const {data, loading, error, post } = usePost();

    function handleLogin (values) {
        post('https://fakestoreapi.com/auth/login', values)
    };

    if(error){
        Alert.alert("Store" , "enter a user")
    }

    if(data){
        if(data.status=== "Error"){
            Alert.alert("Store" , "user not found")
        }
        else{
            navigation.navigate("Products")
        }
    }

    return(
    <SafeAreaView style= {styles.container}>
        <View style= {styles.logo_container}>
        <Image style= {styles.logo} source={require("../assets/login.png")}/>
        </View>

        <Formik initialValues={{username:"", password:""}} onSubmit= {handleLogin}>
        {({handleSubmit, handleChange, values}) => 
        (<View style= {styles.body_container}>
        <Input placeholder="enter username" 
                value={values.username} 
                onType={handleChange("username")}
                iconName="person-outline"/>
        <Input placeholder= "enter password" 
                value={values.password} 
                onType={handleChange("password")}
                iconName="lock-closed-outline"/>
        <Button text= "Login" onPress={handleSubmit} loading={loading} />
        </View>)}
        </Formik>

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
        tintColor: "gray",
        margin:20
    },
    body_container:{
        marginTop:20
    }
    
} 