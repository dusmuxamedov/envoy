import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
  Image
} from "react-native";
import React from "react";
import { Colors, Fonts } from "../shared/tokens";
import { router } from "expo-router";

import { Input } from "../shared/input/sign-up-input";

const { width, height } = Dimensions.get("window");

const Register = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: width, height: height }}
        source={require("../assets/images/register-img.png")}
      >
        <View style={{}}>
          <Pressable
            onPress={() => router.push("/sign-up-otp")}
            style={{ position: "absolute", top: 50, left: 32 }}
          >
            <Image source={require("../assets/icons/arrow.left.png")} />
          </Pressable>
        </View>
        <View
          style={{
            position: "absolute",
            top: "12%",
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
          <Text
            style={{
              color: Colors.fontWhite,
              fontSize: Fonts.F20,
              fontWeight: 700,
              marginBottom: 15
            }}
          >
            Ro’yhatdan o’tish
          </Text>
          {/* <View style={{}}> */}
          <Input placeholder="Ism" />
          <Input placeholder="Parol" isPassword />
          <Input placeholder="Qayta Parol" isPassword />
          {/* </View> */}

          <Pressable
            onPress={() => router.push("welcome")}
            style={{
              backgroundColor: Colors.orange,
              width: width * 0.9,
              borderRadius: 32,
              height: 80,
              marginBottom: 37,
              marginTop: 20,

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
              Ro’yhatdan o’tish
            </Text>
          </Pressable>

          <Text
            style={{
              textAlign: "center",
              fontSize: Fonts.F20,
              fontWeight: 400,
              color: Colors.fontWhite,
              width: width * 0.9
            }}
          >
            Parolni eslab qoling. Ma’lumotlaringizni tiklash uchun kerak bo’ladi
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
