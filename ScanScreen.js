import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Camera Scanner */}
      <View style={styles.scanContainer}>
        <Image 
          style={styles.productImage} 
          source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.av-DaoCueS5_JyX1ZQzkggHaHa&pid=Api&P=0&h=180" }} 
        />
        <View style={styles.scanOverlay} />
      </View>

      {/* Hộp thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.av-DaoCueS5_JyX1ZQzkggHaHa&pid=Api&P=0&h=180" }}
          style={styles.productThumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.owner}>Lauren’s</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'rgb(235, 223, 207)', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  // Nút quay lại
  backButton: { 
    position: "absolute", 
    top: 50, 
    left: 20, 
    backgroundColor: "white", 
    padding: 8, 
    borderRadius: 10 
  },

  // Khu vực chứa sản phẩm
  scanContainer: {
    width: 300,
    height: 450,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  // Hình ảnh sản phẩm
  productImage: { 
    width: "100%", 
    height: "100%", 
    resizeMode: "cover", 
    borderRadius: 10 
  },

  // Hiệu ứng khung quét
  scanOverlay: {
    position: "absolute",
    width: 250,
    height: 300,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    borderStyle: "solid",
  },

  // Hộp chứa thông tin sản phẩm
  productInfo: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    width: 280,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  productThumbnail: { 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    marginRight: 10 
  },

  textContainer: { flex: 1 },

  owner: { fontSize: 14, color: "gray" },

  productName: { fontSize: 18, fontWeight: "bold" },

  addButton: {
    backgroundColor: "#3B82F6",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScanScreen;
