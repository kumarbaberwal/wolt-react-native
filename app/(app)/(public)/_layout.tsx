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
    </Stack>
  )
}