import { Link, router, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Colors, Fonts } from "../shared/tokens";

import { useEffect } from "react";

export default function App() {
  // const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("first-screen");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("../assets/images/envoy logo.png")} />
      {/* <Pressable onPress={() => router.push("/SignUpInput")}> */}
      <Pressable onPress={() => router.push("/first-screen")}>
        <Text style={styles.text}>Envoy</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.orange,
    fontSize: Fonts.F48
  }
});
