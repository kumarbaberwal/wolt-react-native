import AppleAuthButton from "@/components/auth/AppleAuthButton"
import GoogleAuthButton from "@/components/auth/GoogleAuthButton"
import { Colors, Fonts } from "@/constants/theme"
import useUserStore from "@/hooks/use-userstore"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from "react-native-reanimated"

export default function OtherOptions() {

  const router = useRouter();
  const { setIsGuest } = useUserStore();

  const continueAsGuest = () => {
    setIsGuest(true);
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.dismiss()}>
        <Ionicons name="close" size={18} color={"#000"} />
      </TouchableOpacity>

      <Text style={styles.title}>
        Other Options
      </Text>

      {/* login buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          {/* apple auth button */}
          <AppleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          {/* google auth button */}
          <GoogleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)}>
          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={18} color={Colors.dark} />
            <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400)}>
          <TouchableOpacity style={styles.otherButton} onPress={continueAsGuest}>
            <Text style={styles.otherButtonText}>Continue as Guest</Text>
          </TouchableOpacity>
        </Animated.View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeBtn: {
    backgroundColor: Colors.light,
    borderRadius: 40,
    padding: 8,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.brandBold,
    marginVertical: 22,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
  otherButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 16,
    gap: 4,
  },
  otherButtonText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: 600,
  },
  facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 16,
    gap: 4,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: 600,
  }
})