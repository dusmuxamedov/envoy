import { StyleSheet, View, Text } from "react-native";
import { Slot, Link, Stack } from "expo-router";
import React from "react";

// fonts

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  //Fontlarni ulash

  //Lora Font
  const [loaded, error] = useFonts({
    LoraBold: require("../assets/fonts/Lora Font/Lora-Bold.ttf"),
    LoraSemiBold: require("../assets/fonts/Lora Font/Lora-SemiBold.ttf"),
    Georgia: require("../assets/fonts/Georgia/georgia.ttf"),
    OriginalGerogia: require("../assets/fonts/Noto_Sans_Georgian/Gerorgiaa/NotoSansGeorgian_Condensed-Bold.ttf"),
    secondGeorgia: require("../assets/fonts/Noto_Sans_Georgian/Gerorgiaa/NotoSansGeorgian_ExtraCondensed-Bold.ttf"),

    RobotoRegular: require("../assets/fonts/Roboto/static/Roboto-Regular.ttf"),
    Roboto: require("../assets/fonts/Roboto/static/Roboto-Bold.ttf"),
    Roboto2: require("../assets/fonts/Roboto/static/Roboto-ExtraBold.ttf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Georgia Font

  // const [loaded, error] = useFonts({});

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  return (
    // <SafeAreaProvider>
    // <SafeAreaView style={{ flex: 1 }}>

    <Stack
      screenOptions={{
        animation: "slide_from_right",
        gestureEnabled: true,
        headerShown: false
      }}
    ></Stack>

    // </SafeAreaView>
    // </SafeAreaProvider>

    // const [] = useFonts({
    //   "LoraBold": require("../assets/fonts/Lora Font/Lora-Bold.ttf")
    // })

    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Link href={"/"}>
    //     <Text style={{ fontSize: 25 }}>Layout</Text>
    //   </Link>
    // </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});
