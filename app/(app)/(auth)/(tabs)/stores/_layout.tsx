import { Stack } from "expo-router"
import React from 'react'

export default function StoresLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <Stack.Screen name="index" options={{ title: "Stores" }} />
    </Stack>
  )
}