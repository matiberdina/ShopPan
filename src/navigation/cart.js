import { Cart } from "../screens";
import React from "react";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Cart"
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
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;