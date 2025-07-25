import { StyleSheet } from "react-native";
import { Slot, Stack } from "expo-router";
import React, { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// splash screenni oldindan to‘xtatib qo‘yamiz
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    LoraBold: require("../assets/fonts/Lora Font/Lora-Bold.ttf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Agar font hali yuklanmagan bo‘lsa hech nima ko‘rsatmaymiz
  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Slot />
    </>
  );
}

const styles = StyleSheet.create({});
