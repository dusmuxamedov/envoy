import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput
} from "react-native";
import React from "react";
import { Colors, Fonts } from "../shared/tokens";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const ResetPassword = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ width: width, height: height }}
        source={require("../assets/images/4th-background-img.png")}
        // source={require("../assets/images/3rd-backgrounf-img.png")}
      >
        <View style={{}}>
          <Pressable
            onPress={() => router.push("/login")}
            style={{ position: "absolute", top: 76, left: 32 }}
          >
            <Image source={require("../assets/icons/arrow.left.png")} />
          </Pressable>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",

            position: "absolute",
            top: height * 0.2,
            left: 0,
            right: 0
          }}
        >
          <Text
            style={{
              fontSize: Fonts.F20,
              fontWeight: 700,
              color: Colors.fontWhite,
              marginBottom: 16
            }}
          >
            Parolni tiklash
          </Text>
          <Text
            style={{
              color: Colors.orangeText,
              width: width,
              fontSize: Fonts.F18,
              fontWeight: 400,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            Parolni tiklash uchun telefon raqamingizni kiriting. Sizga kod
            keladi
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: "35%",
            alignItems: "center",
            justifyContent: "center",
            left: 0,
            right: 0
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              justifyContent: "center",
              width: width * 0.9,
              marginBottom: 16
            }}
          >
            <View
              style={{
                backgroundColor: Colors.orange,
                width: "30%",
                height: 64,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  color: Colors.fontWhite,
                  fontSize: 20,
                  fontWeight: 700
                }}
              >
                +998
              </Text>
            </View>

            <View
              style={{
                borderRadius: 50,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderColor: Colors.orange,
                borderWidth: 1,
                flex: 1,
                height: 64,

                justifyContent: "center",
                paddingLeft: 16
              }}
            >
              <TextInput
                placeholder="991112233"
                placeholderTextColor={"#929295"}
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  //   opacity: 0.5,
                  color: Colors.fontWhite,
                  width: "100%"
                }}
              />
            </View>
          </View>

          <Pressable
            onPress={() => router.push("OTPInput")}
            style={{
              backgroundColor: Colors.orange,
              width: width * 0.9,
              borderRadius: 32,
              height: 80,
              marginBottom: 37,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: Colors.fontWhite,
                fontWeight: 700,
                fontSize: Fonts.F20
              }}
            >
              Davom etish
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
