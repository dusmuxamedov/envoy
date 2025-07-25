import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BUTTON_WIDTH = SCREEN_WIDTH - 40;
const CIRCLE_SIZE = 60;
const MAX_TRANSLATE = BUTTON_WIDTH - CIRCLE_SIZE;

export default function SwipeToStartButton() {
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
    <View style={styles.container}>
      <View style={styles.buttonBackground}>
        <Text style={styles.label}>Boshlash</Text>
        <Text style={styles.arrow}>{">>"}</Text>
      </View>

      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ translateX }]
          }
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.iconPlaceholder}>
          <Text style={{ fontSize: 20, color: "#FF6B00" }}>📍</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: BUTTON_WIDTH,
    height: CIRCLE_SIZE,
    margin: 20,
    justifyContent: "center",
    position: "absolute",
    top: 50
  },
  buttonBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E86D24",
    borderRadius: CIRCLE_SIZE,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between"
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
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  iconPlaceholder: {
    alignItems: "center",
    justifyContent: "center"
  }
});
