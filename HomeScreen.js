import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Tuan Long</Text>
        </View>
        <Image
          source={require("../assets/group5.png")} // Thay bằng avatar của bạn
          style={styles.avatar}
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsGrid}>
        {insightsData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.insightBox, { backgroundColor: item.bgColor }]}
            onPress={() => {
              if (item.route) navigation.navigate(item.route);
            }}
          >
            <Ionicons name={item.icon} size={30} color={item.color} />
            <Text style={styles.insightTitle}>{item.title}</Text>
            <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={24} color="#4F46E5" />
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

// Data
const insightsData = [
  { title: "Scan new", subtitle: "Scanned 483", icon: "scan", color: "#6366F1", bgColor: "#EEF2FF", route: "Scan" },
  { title: "Counterfeits", subtitle: "Counterfeited 32", icon: "alert-circle", color: "#F97316", bgColor: "#FEF3C7", route: "Payment" },
  { title: "Success", subtitle: "Checkouts 8", icon: "checkmark-circle", color: "#10B981", bgColor: "#ECFDF5", route: "Success" },
  { title: "Directory", subtitle: "History 26", icon: "calendar", color: "#3B82F6", bgColor: "#DBEAFE", route: "Home" },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20, paddingTop: 50 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "column",
  },
  greeting: { fontSize: 16, color: "#6B7280" },
  userName: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginLeft: 10 }, // Khoảng cách hợp lý
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827", marginTop: 20 },
  insightsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 },
  insightBox: { width: "48%", padding: 20, borderRadius: 15, alignItems: "center", marginBottom: 10 },
  insightTitle: { fontSize: 14, fontWeight: "bold", color: "#111827", marginTop: 5 },
  insightSubtitle: { fontSize: 12, color: "#6B7280" },

  // Bottom Navigation Styles
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
});

export default HomeScreen;
