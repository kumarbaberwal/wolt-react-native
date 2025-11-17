import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: 600,
        },
      }}
    >
      <Tabs.Screen
        name="restaurants"
        options={{
          title: "Restaurants",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name="restaurant" size={size} color={color} />
        }} />
      <Tabs.Screen
        name="discovery"
        options={{
          title: "Discovery",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "compass" : "compass-outline"} size={size} color={color} />
        }} />
      <Tabs.Screen
        name="stores"
        options={{
          title: "Stores",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "storefront" : "storefront-outline"} size={size} color={color} />
        }} />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => <FontAwesome5 name={focused ? "search-location" : "search"} size={size} color={color} />
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
        }} />
    </Tabs>
  )
}