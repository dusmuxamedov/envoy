import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Fonts } from "../shared/tokens";
import { Colors } from "../shared/tokens";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  return (
    <View style={{}}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ width: width, height: height }}
        source={require("../assets/images/sign-up-backgroungImg.png")}
      >
        <View style={{}}>
          <Pressable
            onPress={() => router.push("/OTPInput")}
            style={{ position: "absolute", top: 76, left: 32 }}
          >
            <Image source={require("../assets/icons/arrow.left.png")} />
          </Pressable>
        </View>

        {/*  */}

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
            Ro’yhatdan o’tish
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
            Telefon raqamingiz
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
            onPress={() => router.push("sign-up-otp")}
            style={{
              backgroundColor: Colors.orange,
              width: width * 0.9,
              borderRadius: 50,
              height: 64,
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

export default SignUp;

const styles = StyleSheet.create({});
