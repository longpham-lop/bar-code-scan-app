import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([
    { id: "1", name: "Orange Juice", brand: "Lauren’s", price: 149, quantity: 2, image: "https://tse4.mm.bing.net/th?id=OIP.o1YmxgF8xXhoPVWjGIlx5QHaHa&pid=Api&P=0&h=180" },
    { id: "2", name: "Skimmed Milk", brand: "Baskin’s", price: 129, quantity: 2, image: "https://tse1.mm.bing.net/th?id=OIP.Je9BtvjBWK4enfPPEq25AQHaHa&pid=Api&P=0&h=180" },
    { id: "3", name: "Aloe Vera Lotion", brand: "Marley’s", price: 1249, quantity: 2, image: "https://tse2.mm.bing.net/th?id=OIP.HkZB4TiKrpG1mIfKrfTvFwHaHi&pid=Api&P=0&h=180" },
  ]);

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, type) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
        : item
    ));
  };

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Your Cart 👍</Text>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, "decrease")}>
                <Ionicons name="remove" size={18} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, "increase")}>
                <Ionicons name="add" size={18} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Tổng tiền */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>₹ {total.toLocaleString()}</Text>
      </View>

      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Payment" ,{ totalPrice: total })}>
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
                    <View style={styles.bottomTab}>
                    <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => {
            if (navigation.canGoBack()) {
            navigation.goBack();
            } else {
            navigation.navigate("Home"); // Nếu không quay lại được thì về Home
            }
        }}
        >
        <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Scan")}>
                <Ionicons name="notifications-outline" size={24} color="#9CA3AF" />
                <View style={styles.notificationDot} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="briefcase-outline" size={24} color="#9CA3AF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="time-outline" size={24} color="#9CA3AF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Cart")}>
                <Ionicons name="cart-outline" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFC", padding: 20, paddingBottom: 80 },
  backButton: { marginTop: 10, marginBottom: 20, alignSelf: "flex-start" },
  title: { fontSize: 22, fontWeight: "bold", color: "#111827", marginBottom: 15 },
  cartItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#F8F8F8", padding: 15, borderRadius: 15, marginBottom: 10 },
  itemImage: { width: 50, height: 50, borderRadius: 10, marginRight: 15 },
  itemInfo: { flex: 1 },
  brand: { fontSize: 12, color: "#6B7280" },
  itemName: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "#F97316", fontWeight: "bold" },
  quantityControl: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", padding: 8, borderRadius: 10 },
  quantity: { marginHorizontal: 10, fontSize: 16 },
  totalContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 20 },
  totalLabel: { fontSize: 18, fontWeight: "bold" },
  totalAmount: { fontSize: 18, fontWeight: "bold", color: "#F97316" },
  checkoutButton: { backgroundColor: "#F97316", padding: 15, borderRadius: 15, alignItems: "center" },
  checkoutText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },

  // Thanh menu phía dưới
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: { alignItems: "center", padding: 10 },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: "#F97316",
    borderRadius: 4,
    position: "absolute",
    top: 5,
    right: 10,
  },
});

export default CartScreen;
