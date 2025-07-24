import FloatingNewEntryButton from "@/app/components/FloatingNewEntryButton ";
import Calender1 from "@/app/components/switchs/calender";
// import CrossPlatformMap from "@/app/components/switchs/map";
import Media from "@/app/components/switchs/media";
import {
  Feather,
  Ionicons,
  MaterialIcons
} from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Journal");
  const [activeFooterTab, setActiveFooterTab] = useState("Journals");

  const renderTabContent = () => {
    switch (activeTab) {
      case "List":
        return <Text style={styles.tabContent}>List Content</Text>;
      case "Calendar":
        return <Calender1 />;
      case "Media":
        return <Media />;
      case "Maps":
        // return <CrossPlatformMap />;
      default:
        return (
          <View style={styles.journalContent}>
            <View style={styles.largeBox}>
              <Text style={styles.boxText}>Description</Text>
              <Text style={styles.descriptionText}>Add a description...</Text>
            </View>
            <View style={styles.smallBoxRow}>
              <View style={styles.smallBox}>
                <Text style={styles.boxText}>Status</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.boxText}>Streak</Text>
              </View>
            </View>
            <View style={styles.smallBoxRow}>
              <View style={styles.smallBox}>
                <Text style={styles.boxText}>Entries</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.boxText}>Media</Text>
              </View>
            </View>
            <View style={styles.dayBox}>
              <Text style={styles.boxText}>Day</Text>
              <Text style={styles.descriptionText}>On This ...</Text>
            </View>
          </View>
        );
    }
  };

  return (
    
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      
      <LinearGradient
         colors={['#3359a5', '#1ab3cd']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.navbar}
        >
      <View style={styles.navbar}>
        <TouchableOpacity>
          <FontAwesome6 name="bars-staggered" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.navIcon}>
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}>
            <MaterialIcons name="more-vert" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}>
            <Link href={"/screens/auth/Login"}>
              <MaterialIcons name="account-circle" size={20} color="white" />
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>

      {/* Main Scroll Content */}
      
      <LinearGradient
         colors={['#3359a5', '#1ab3cd']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.content}
        >
      <ScrollView style={styles.content}>
        
        <View style={styles.header}>
          <Text style={styles.title}>My Journal</Text>
          <Text style={styles.year}>2025</Text>
        </View>
        

        {/* Switch Tabs */}
        <View style={styles.switchContainer}>
          <View style={styles.switchTabs}>
            {["Journal", "List", "Calendar", "Media", "Maps"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.switchTab,
                  activeTab === tab && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                {tab === "Journal" ? (
                  <Ionicons
                    name="book"
                    size={20}
                    color={activeTab === tab ? "#44b3ff" : "gray"}
                  />
                ) : (
                  <Text style={styles.switchText}>{tab}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          <View
            style={[
              styles.tabContentContainer,
              activeTab === "Maps" && { padding: 4 },
            ]}
          >
            {renderTabContent()}
          </View>
        </View>
      </ScrollView>
      </LinearGradient>
      

      {/* Floating New Entry Button */}
      <View style={styles.floatingButtonWrapper}>
        <FloatingNewEntryButton />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerTab,
            activeFooterTab === "Journals" && styles.activeFooterTab,
          ]}
          onPress={() => setActiveFooterTab("Journals")}
        >
          <Ionicons
            name="book"
            size={24}
            color={activeFooterTab === "Journals" ? "#44b3ff" : "gray"}
          />
          <Text style={styles.footerText}>Journals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerTab,
            activeFooterTab === "More" && styles.activeFooterTab,
          ]}
          onPress={() => setActiveFooterTab("More")}
        >
          <MaterialIcons
            name="more-horiz"
            size={24}
            color={activeFooterTab === "More" ? "#44b3ff" : "gray"}
          />
          <Text style={styles.footerText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  navbar: {
    flexDirection: "row",
    gap: 190,
    alignItems: "center",
    padding: 15,
    
  },
  navIcons: { flexDirection: "row" },
  navIcon: { marginLeft: 20 },
  content: { flex: 1, backgroundColor: "transparent" },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "white" },
  year: { fontSize: 16, color: "white", marginTop: 5 },
  switchContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  switchTabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
  },
  switchTab: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#44b3ff",
    
  },
  switchText: { fontSize: 14, color: "black" },
  tabContentContainer: {
    padding: 20,
    backgroundColor: "white",
    minHeight: 800,
  },
  tabContent: { fontSize: 16, textAlign: "center", padding: 20 },
  journalContent: { marginBottom: 20 },
  largeBox: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    height: 120,
  },
  smallBoxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  smallBox: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 8,
    width: "48%",
    height: 100,
  },
  dayBox: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 8,
    height: 100,
  },
  boxText: { fontSize: 16, fontWeight: "bold" },
  descriptionText: { fontSize: 14, color: "gray", marginTop: 5 },
  floatingButtonWrapper: {
    position: "absolute",
    bottom: 10,
    right: 5,
    zIndex: 100,
  },
  footer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
  footerTab: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  activeFooterTab: {
    borderTopWidth: 2,
    borderTopColor: "#44b3ff",
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomePage;
