import React  from "react";
import { FlatList, ActivityIndicator } from "react-native";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";


function Products({navigation}) {

    const {loading,error, data} = useFetch('https://fakestoreapi.com/products');

    const renderProduct =({item}) => 
    <ProductCard product={item} 
                onSelect={() => handleProductSelect(item.id)}/>;
    
    if (loading){
        return <Loading />
    }
    if (error) {
        return <Error/>
    }

    const handleProductSelect= (id) => { navigation.navigate ("Detail", {id})};

    return (
        <FlatList data={data} renderItem={renderProduct}  />  
    );
};

export default Products;
