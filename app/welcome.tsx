import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable
} from "react-native";
import React, { useEffect } from "react";
import { Colors, Fonts } from "../shared/tokens";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const Welcome = () => {
  useEffect(() => {
    Alert.alert(
      "Tabriklaymiz🎉🎊",
      "Siz Ro'yxatdan muvaffaqiyatli o'tdingiz. ✅"
    );
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        onPress={() =>
          Alert.alert(
            "Tabriklaymiz🎉🎊",
            "Siz Ro'yxatdan muvaffaqiyatli o'tdingiz. ✅"
          )
        }
      >
        <Image source={require("../assets/images/mini-logo.png")} />
      </Pressable>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: Fonts.F20,
            textAlign: "center",
            marginBottom: 50,
            marginTop: 20,
            width: width * 0.9
          }}
        >
          Siz Ro'yxatdan muvaffaqiyatli o'tdingiz.
        </Text>
        <Pressable onPress={() => router.push("/")}>
          <Text style={{ fontSize: 30, color: Colors.opacityOrange }}>
            Eng Boshiga qaytish 🔙
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

//
//
//
//

// import { Dimensions, Image, StyleSheet, Text, View, Alert } from "react-native";
// import React from "react";

// const { width, height } = Dimensions.get("window");

// const Welcome = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Image style={{}} source={require("../assets/images/mini-logo.png")} />
//       <Text style={{ alignItems: "center", justifyContent: "center" }}>
//         Siz Ro'yxatdan muvaffaqiyatli o'tdingiz.
//       </Text>
//       Alert.alert("Sarlavha", "Xabar matni");
//     </View>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({});
