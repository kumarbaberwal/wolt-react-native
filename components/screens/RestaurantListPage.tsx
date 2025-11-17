import { Fonts } from "@/constants/theme"
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import CategoryList from "../CategoryList"
import RestaurantList from "../RestaurantList"

export default function RestaurantListPage() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top,
        }}
      >
        <Text style={styles.pageTitle}>
          Restaurants
        </Text>
        <CategoryList />
        <Text style={styles.allRestaurantsTitle}>
          All Restaurants
        </Text>
        <RestaurantList />
      </Animated.ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontFamily: Fonts.brandBlack,
    fontSize: 30,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  allRestaurantsTitle: {
    fontFamily: Fonts.brandBold,
    fontSize: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
  }
})