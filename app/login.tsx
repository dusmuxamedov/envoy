import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors, Fonts } from "../shared/tokens";

const { width, height } = Dimensions.get("window");

const Login = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        style={{ width: width, height: height }}
        source={require("../assets/images/3rd-backgrounf-img.png")}
        // source={require("../assets/images/a.jpg")}
      >
        <View style={{}}>
          <Pressable
            onPress={() => router.push("/role")}
            style={{ position: "absolute", top: 76, left: 32 }}
          >
            <Image source={require("../assets/icons/arrow.left.png")} />
          </Pressable>
        </View>

        <View
          style={{
            position: "absolute",
            top: "28%",
            marginHorizontal: 32,
            alignItems: "center",
            justifyContent: "center",
            left: "1%",
            right: "1%"
          }}
        >
          <Text
            style={{
              color: Colors.fontWhite,
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 48
            }}
          >
            Dasturga kirish
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              justifyContent: "center",
              width: width * 0.9,
              marginBottom: 8
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

          <View
            style={{
              width: width * 0.9,
              height: 64,
              borderRadius: 50,
              borderColor: Colors.orange,
              borderWidth: 1,

              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: 20,
              marginBottom: 32
            }}
          >
            <TextInput
              placeholder="Parol"
              placeholderTextColor={Colors.inputOpacity}
              style={{
                fontWeight: 700,
                fontSize: 20,
                // opacity: 0.5,
                color: Colors.fontWhite,
                width: "100%"
              }}
            />
          </View>

          <Pressable
            onPress={() => router.push("welcome")}
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

          <Link href={"./resetPassword"} style={{ marginBottom: 15 }}>
            <Text
              style={{
                color: Colors.fontWhite,
                fontSize: 20,
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationStyle: "solid"
              }}
            >
              Parolni tiklash
            </Text>
          </Link>
          {/* <Link href={"sign-up"}>
            <Text style={{ color: Colors.opacityOrange, fontSize: Fonts.F20 }}>
              Ro'yxatdan o'tish
            </Text>
          </Link> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
