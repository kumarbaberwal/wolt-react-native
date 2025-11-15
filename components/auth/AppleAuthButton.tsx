import { Ionicons } from "@expo/vector-icons"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function AppleAuthButton() {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={18} color={"#fff"} />
      <Text style={styles.appleButtonText}>Continue with Apple</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 16,
    gap: 4,
  },
  appleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
  }
})