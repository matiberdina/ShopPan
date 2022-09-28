import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Products = ({ navigation  }) => {
    return (
        <View style={styles.container}>
            <Text>Lista de Productos</Text>
            <Button 
                title="Ver Producto"
                onPress={() => navigation.navigate("Product")}
            />
        </View>
    )
};

export default Products;