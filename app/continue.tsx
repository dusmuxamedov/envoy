import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, router, useNavigation } from "expo-router";
import { Colors, Fonts } from "../shared/tokens";

const { width: SCREEN_WIDTH, height } = Dimensions.get("window");
const BUTTON_WIDTH = SCREEN_WIDTH - 40;
const CIRCLE_SIZE = 60;
const MARGIN = 10;
const MAX_TRANSLATE = BUTTON_WIDTH - CIRCLE_SIZE - MARGIN;

const Continue = () => {
  const navigation = useNavigation<any>();
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.min(Math.max(0, gestureState.dx), MAX_TRANSLATE);
        translateX.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        const shouldNavigate = gestureState.dx > MAX_TRANSLATE * 0.7;

        if (shouldNavigate) {
          navigation.navigate("third"); // sahifa nomi: Next
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      }
    })
  ).current;

  return (
    <SafeAreaProvider>
      <View style={{}}>
        <Stack.Screen options={{ presentation: "card" }} />
        <Image
          source={require("../assets/images/man-img.png")}
          style={{
            width: SCREEN_WIDTH,
            height: height * 0.5,
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      </View>

      <SafeAreaView style={{ flex: 1, backgroundColor: "#161616" }}>
        <View style={{ marginHorizontal: 32 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 24,
              marginBottom: 32,
              marginTop: 30
            }}
          >
            <Pressable
              style={styles.roterBtn}
              onPress={() => router.push("first-screen")}
            ></Pressable>

            <Pressable style={styles.roteredBtn}></Pressable>

            <Pressable
              style={styles.roterBtn}
              onPress={() => router.push("third")}
            ></Pressable>
          </View>

          <View>
            <Text style={styles.description}>
              Yukingizni tez va arzon yetkazib bering!
            </Text>
            <Text style={styles.text}>
              Envoy bilan yuk topish va yetkazish oson! Yukingizni joylang, eng
              yaxshi narx va ishonchli haydovchini tanlang.
            </Text>
          </View>

          <View
            style={[
              styles.container,
              {
                position: "relative",
                bottom: 10,
                right: 10, // bag bug
                justifyContent: "center"
              }
            ]}
          >
            <View
              style={[
                styles.buttonBackground,
                {
                  position: "absolute"
                }
              ]}
            >
              <Text style={styles.label}>Davom etish</Text>
              <Image source={require("../assets/icons/next-icon.png")} />
            </View>

            <Animated.View
              style={[
                styles.circle,
                { transform: [{ translateX }] },
                {
                  marginLeft: 5,
                  paddingTop: 7
                }
              ]}
              {...panResponder.panHandlers}
            >
              <View style={[styles.iconPlaceholder, {}]}>
                {/* <Text>sal</Text> */}
                <Image source={require("../assets/icons/back.png")} />
              </View>
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Continue;

const styles = StyleSheet.create({
  roteredBtn: {
    backgroundColor: Colors.orange,
    width: 40,
    height: 16,
    borderRadius: 32
  },
  roterBtn: {
    backgroundColor: Colors.opacityOrange,
    width: 16,
    height: 16,
    borderRadius: 32,
    opacity: 0.5
  },
  description: {
    color: Colors.fontWhite,
    fontSize: Fonts.F20,
    fontWeight: 700,
    width: 150,
    marginBottom: 24
  },
  text: {
    fontSize: Fonts.F18,
    fontWeight: 400,
    color: Colors.orangeText,
    marginBottom: 42
  },
  startText: {
    fontSize: Fonts.F20,
    fontWeight: 700,
    fontFamily: "LoraBold",
    color: "#fff"
  },

  /*
  
  
  */

  container: {
    width: BUTTON_WIDTH,
    height: CIRCLE_SIZE,
    // margin: 20,
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
    // marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
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
    // backgroundColor: "white",
    // elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // marginLeft: 10,
    marginTop: 10
  },
  iconPlaceholder: {
    alignItems: "center",
    justifyContent: "center"
  }
});
