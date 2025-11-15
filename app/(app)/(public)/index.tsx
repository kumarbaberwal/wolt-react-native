import woltLogo from "@/assets/images/wolt-logo.png";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/components/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {


  const openWebBrowser = () => {
    Linking.openURL("https://kumarbaberwal.vercel.app");
  }


  return (
    <View
      style={styles.container}
    >
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>


        <LinearGradient
          colors={['transparent', '#fff']}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,

          }}
        />

      </View>
      <View style={styles.contentContainer}>


        <Image source={woltLogo} style={styles.brandLogo} />


        <Animated.Text entering={FadeInDown} style={styles.tagLine}>
          Almost everything delivered
        </Animated.Text>


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
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>
                Other Options
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>


        {/* Privacy content */}
        <Animated.View style={styles.privacyContainer} entering={FadeInDown.delay(400)}>
          <Text style={styles.privacyText}>
            Please visit{' '}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{" "}
            to learn about personal data processing at wolt
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    height: 48,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagLine: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    fontWeight: 900,
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 16,
    gap: 4,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: 600,
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#f285f4",
    textDecorationLine: "underline",
  }
})