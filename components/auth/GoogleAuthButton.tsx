import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function GoogleAuthButton() {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-google" size={18} color={"#fff"} />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#4285f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  googleButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 600,
  }
})