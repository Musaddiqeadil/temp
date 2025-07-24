import React from 'react';
import { View, Text } from 'react-native'; // Make sure Text is imported
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}