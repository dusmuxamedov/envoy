import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
  Animated,
  PanResponder
} from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts } from "../shared/tokens";

const { width: SCREEN_WIDTH, height } = Dimensions.get("window");
const BUTTON_WIDTH = SCREEN_WIDTH - 40;
const CIRCLE_SIZE = 60;
const MARGIN = 10;
const MAX_TRANSLATE = BUTTON_WIDTH - CIRCLE_SIZE - MARGIN;

const Role = () => {
  const navigation = useNavigation<any>();

  // 🔄 Har bir tugma uchun alohida translateX qiymati
  const translateXSignIn = useRef(new Animated.Value(0)).current;
  const translateXSignUp = useRef(new Animated.Value(0)).current;

  // 🔁 PanResponder yaratish funksiyasi
  const createPanResponder = (
    translateX: Animated.Value,
    onSuccess: () => void
  ) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.min(Math.max(0, gestureState.dx), MAX_TRANSLATE);
        translateX.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        const shouldNavigate = gestureState.dx > MAX_TRANSLATE * 0.7;
        if (shouldNavigate) {
          onSuccess();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      }
    });

  // 🧭 Har bir button uchun alohida panResponder
  const panResponderSignIn = useRef(
    createPanResponder(translateXSignIn, () => navigation.navigate("login"))
  ).current;

  const panResponderSignUp = useRef(
    createPanResponder(translateXSignUp, () => router.push("login"))
  ).current;

  return (
    <View style={{}}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ width: SCREEN_WIDTH, height: height }}
        source={require("../assets/images/2nd-background-img.png")}
      >
        <View style={{}}>
          <Pressable
            onPress={() => router.push("/entrance")}
            style={{ position: "absolute", top: 76, left: 32 }}
          >
            <Image source={require("../assets/icons/arrow.left.png")} />
          </Pressable>
        </View>

        <View style={styles.textFolder}>
          <Text style={[styles.envoyText, { fontFamily: "RobotoRegular" }]}>
            Ro‘lingizni tanlang
          </Text>
          <Text
            style={{
              color: Colors.orangeText,
              width: 320,
              fontSize: Fonts.F18
            }}
          >
            Bitta raqamdan ham Buyurtmachi ham Haydovchi bo’lib ro’yxatdan o’ta
            olmaysiz
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: "10%",
            gap: 16,
            paddingHorizontal: 32,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={[
              styles.container,
              {
                position: "relative",
                bottom: 10,
                right: 10,
                justifyContent: "center"
              }
            ]}
          >
            <View style={[styles.buttonBackground, { position: "absolute" }]}>
              <Text style={styles.label}>Buyurtmachi</Text>
              <Image source={require("../assets/icons/next-icon.png")} />
            </View>

            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ translateX: translateXSignIn }],
                  marginLeft: 5,
                  paddingTop: 7
                }
              ]}
              {...panResponderSignIn.panHandlers}
            >
              <View style={styles.iconPlaceholder}>
                <Image source={require("../assets/icons/customer.png")} />
              </View>
            </Animated.View>
          </View>

          <View
            style={[
              styles.container,
              {
                position: "relative",
                bottom: 10,
                right: 10,
                justifyContent: "center"
              }
            ]}
          >
            <View style={[styles.buttonBackground, { position: "absolute" }]}>
              <Text style={styles.label}>Haydovchi</Text>
              <Image source={require("../assets/icons/next-icon.png")} />
            </View>

            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ translateX: translateXSignUp }],
                  marginLeft: 5,
                  paddingTop: 7
                }
              ]}
              {...panResponderSignUp.panHandlers}
            >
              <View style={styles.iconPlaceholder}>
                <Image source={require("../assets/icons/driver.png")} />
              </View>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Role;

const styles = StyleSheet.create({
  textFolder: {
    width: 323,
    position: "absolute",
    bottom: "35%",
    left: 20
  },
  envoyText: {
    color: Colors.fontWhite,
    fontSize: Fonts.F20,
    fontWeight: 700,
    marginBottom: 32
  },
  greetingText: {
    color: Colors.fontWhite,
    fontSize: Fonts.F20,
    fontWeight: 700,
    marginBottom: 24,
    lineHeight: 26
  },

  /*
  
  
  
  
  */

  container: {
    width: BUTTON_WIDTH,
    height: CIRCLE_SIZE,
    justifyContent: "center"
  },
  buttonBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E86D24",
    borderRadius: CIRCLE_SIZE,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    height: 70
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 100
  },
  arrow: {
    color: "white",
    fontSize: 18
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 10
  },
  iconPlaceholder: {
    alignItems: "center",
    justifyContent: "center"
  }
});
