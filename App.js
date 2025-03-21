import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import các màn hình
import HomeScreen from "./Screen/HomeScreen";
import ScanScreen from "./Screen/ScanScreen";
import PaymentScreen from "./Screen/PaymentScreen";
import SuccessScreen from "./Screen/SuccessScreen";
import CartScreen from "./Screen/CartScreen";  // Đảm bảo đã import đúng màn hình

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
