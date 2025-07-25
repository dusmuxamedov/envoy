import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts } from "../shared/tokens";

const { width, height } = Dimensions.get("window");

const Role = () => {
  return (
    // <SafeAreaView>
    <View style={{}}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ width: width, height: height }}
        source={require("../assets/images/2nd-background-img.png")}
        // width={width}
        // height={height}
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
          style={[
            styles.btnsFolder,
            {
              position: "absolute",
              bottom: "10%",
              gap: 15,
              paddingHorizontal: 32
            }
          ]}
        >
          <Pressable
            onPress={() => router.push("login")}
            style={{
              width: width * 0.8,
              height: 72,
              borderRadius: 70,
              backgroundColor: Colors.orange,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 32
            }}
          >
            <Image
              source={require("../assets/icons/customer .png")}
              style={{ marginTop: 8 }}
            />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>
              Buyurtmachi
            </Text>
            <Image source={require("../assets/icons/next-icon.png")} />
          </Pressable>
          {/*  */}
          <Pressable
            onPress={() => router.push("login")}
            style={{
              width: width * 0.8,
              height: 72,
              borderRadius: 70,
              backgroundColor: Colors.orange,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 10,
              paddingRight: 32
            }}
          >
            <Image
              source={require("../assets/icons/driver.png")}
              style={{ marginTop: 8 }}
            />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>
              Haydovchi
            </Text>
            <Image source={require("../assets/icons/next-icon.png")} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
    // </SafeAreaView>
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
  btnsFolder: {
    // top: 10
  }
});
