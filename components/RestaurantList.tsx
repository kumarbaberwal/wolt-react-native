import { Colors } from "@/constants/theme";
import { useRestaurants } from "@/hooks/useRestaurants";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RestaurantList() {
  const { data: restaurants, isLoading, error } = useRestaurants();


  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} color={Colors.secondary} />
      </View>
    )
  }

  return (
    <>
      {restaurants?.map((item) => (
        <View key={item.id}>
          {/* <Link href={""}> */}
          <TouchableOpacity style={styles.card}>
            <Image
              source={item.image!}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
            </View>

            <View style={styles.metaData}>
              <Ionicons name="bicycle-outline" size={16} color={"#666"} />
              <Text style={styles.metaDataText}>
                ${item.deliveryFee.toFixed(2)}
              </Text>
              <Text style={styles.dot}>
                .
              </Text>
              <Text style={styles.metaDataText}>
                $$$$
              </Text>
              <Text style={styles.dot}>
                .
              </Text>
              <Ionicons name="happy-outline" size={16} color={"#666"} />
            </View>

          </TouchableOpacity>
          {/* </Link> */}
        </View>
      ))}
    </>
  )
}


const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light,
    overflow: "hidden",
    boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.2)",
    // elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  metaData: {
    borderTopColor: Colors.light,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 10,
  },
  metaDataText: {
    fontSize: 13,
    color: "#666",
  },
  dot: {
    color: "#999",
    fontSize: 13,
  }
})