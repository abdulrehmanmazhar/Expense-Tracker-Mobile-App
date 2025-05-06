import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/ui/Button";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
type Props = {};

const Welcome = (props: Props) => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      {/* <Typo size={30} fontWeight={'700'} color='royalblue'>Welcome Page</Typo> */}
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.loginButton} onPress={()=>router.push('/(auth)/login')}>
            <Typo fontWeight={"500"}>Sign In</Typo>
          </TouchableOpacity>
          <Animated.Image
          entering={FadeIn.duration(1000)}
            style={styles.welcomeImage}
            // resizeMode="contain"
            source={require("../../assets/images/welcome-onboard.png")}
          />
        </View>

        <View style={styles.footer}>

          <Animated.View style={{ alignItems: "center", gap: 2 }} entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}>
            <Typo size={30} fontWeight={"800"}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={"800"}>
              of your finances
            </Typo>
          </Animated.View>

          <Animated.View style={{ alignItems: "center", gap: 2 }} entering={FadeInDown.duration(2000).delay(100).springify().damping(12)}>
            <Typo size={17} color={colors.textLight}>
              Finances must be arranged to set a better
            </Typo>
            <Typo size={17} color={colors.textLight}>
              lifestyle in future
            </Typo>
          </Animated.View>

          <View style={styles.buttonContainer}>
            <Button onPress={()=> router.push('/(auth)/register')}>
              <Typo size={22} color={colors.neutral900} fontWeight={'600'}>Get Started</Typo>
            </Button>
          </View>

        </View>

      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "#fff",
    shadowOffset: { width: 10, height: -100 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25
  }
});
