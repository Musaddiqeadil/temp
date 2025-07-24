import { Redirect } from "expo-router";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      // Simulate auth check (replace with actual auth logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll assume user is not authenticated
      setIsAuthenticated(false);
      setIsLoading(false);
    }

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Corrected Redirect component usage
  return isAuthenticated ? (
    <Redirect href="/screens/pages/Home" />
  ) : (
    <Redirect href="/screens/auth/Login" />
  );
}