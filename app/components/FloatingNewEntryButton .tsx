import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FloatingNewEntryButton = () => {
  return (
     <LinearGradient
    colors={['#3BB8FF', '#1268A3']}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={styles.floatingButton}
  >
    <TouchableOpacity style={styles.floatingButton}>
      <Ionicons name="pencil" size={20} color="white" />
      <Text style={styles.floatingButtonText}>New Entry</Text>
    </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'fixed',
    right: 20,
    bottom: 100,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000, 
  },
  floatingButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default FloatingNewEntryButton;