import { Stack } from "expo-router"
import React from 'react'

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
          headerLargeTitle: true,
          headerTransparent: true,
        }} />
    </Stack>
  )
}