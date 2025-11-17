import { Stack } from "expo-router"
import React from 'react'

export default function RestaurantsLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <Stack.Screen name="index" options={{ title: "Restaurants", headerShown: false }} />
    </Stack>
  )
}