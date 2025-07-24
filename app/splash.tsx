import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/screens/auth/Login");
    }, 2000); // 2 second splash screen
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={require("./assets/images/logo.png")} 
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20 }}>My Awesome App</Text>
    </View>
  );
}