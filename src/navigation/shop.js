import { Categories, Product, Products } from "../screens";

import React from "react";
import { Text } from "react-native";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                },
            }}
        >
            <Stack.Screen 
                name="Categories"
                component={Categories} 
                options={{
                    title: 'Categorias',
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title: route.params.name,
                })}
                />
            <Stack.Screen
                name="Product" 
                component={Product} 
                options={({ route }) => ({
                    title: route.params.name,
                })}
                />
        </Stack.Navigator>
    )
}

export default ShopNavigator;