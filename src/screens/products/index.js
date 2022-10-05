import { Button, FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { filteredProducts, selectedProduct } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "../../components";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selected);

    const productsFiltered = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, []);

    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
       navigation.navigate('Product', { name: item.title});
    };   
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />

    return (
        <FlatList 
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
};

export default Products;