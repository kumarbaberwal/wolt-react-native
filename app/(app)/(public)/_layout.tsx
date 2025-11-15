import { Stack } from "expo-router"
import React from 'react'

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#fff",
        }
      }} />
      <Stack.Screen name="other-options" options={{
        headerShown: false,
        presentation: "formSheet",
        title: "",
        headerShadowVisible: false,
        sheetAllowedDetents: [0.5,],
        sheetCornerRadius: 16,
      }} />

    </Stack>
  )
}