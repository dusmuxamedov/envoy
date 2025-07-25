import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Dimensions,
  Pressable,
  ImageBackground
} from "react-native";
import { Colors, Fonts } from "../shared/tokens";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function OtpInput() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);

  // ✏️ Raqam kiritilganda ishlaydi
  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Keyingi inputga o'tish
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  // ⌫ Backspace bosilganda ishlaydi
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      // Agar input bo‘sh bo‘lsa, oldingi inputga o‘tamiz
      if (otp[index] === "" && index > 0) {
        inputs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      } else {
        // Aks holda shu inputni o‘chiramiz
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // ☑️ Tasdiqlash tugmasi bosilganda
  const handleSubmit = () => {
    const code = otp.join("");
    console.log(" Sign-Updan yuborilgan kod:", code);

    // 🔄 Inputlarni tozalash
    setOtp(["", "", "", ""]);

    // Birinchi inputga qayta fokus
    inputs.current[0]?.focus();

    router.push("register");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/sign-up-backgroungImg.png")}
        style={{ width: width, height: height }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            right: 0,
            top: 120
          }}
        >
          <Text style={styles.title}>Ro’yhatdan o’tish</Text>
          <Text style={styles.subtitle}>SMS orqali kelgan kodni kiriting</Text>

          <View style={styles.inputRow}>
            {otp.map((digit, index) => (
              <TextInput
                style={styles.input} // Inputning tashqi ko‘rinishi
                key={index} // Har bir input uchun unikal kalit
                ref={(ref) => {
                  inputs.current[index] = ref; // Har bir inputni ref massivga saqlaymiz
                }}
                maxLength={1} // Faqat bitta raqam kiritish mumkin
                keyboardType="number-pad" // Klaviatura raqamli bo‘ladi
                value={digit} // Inputda hozirgi qiymat ko‘rsatiladi
                onChangeText={(text) => handleChange(text, index)} // Raqam kirganda funksiyani chaqiramiz
                onKeyPress={(e) => handleKeyPress(e, index)} // ⌫ ushlaydi
                autoFocus={index === 0} // Birinchi input avtomatik fokusda bo‘ladi
                placeholder=""
                placeholderTextColor="#ccc"
              />
            ))}
          </View>

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Davom etish</Text>
          </Pressable>

          <Text style={styles.timer}>
            30 soniyadan so‘ng qayta sms jo‘natishingiz mumkin
          </Text>
          <TouchableOpacity>
            <Text style={styles.link}>SMS kelmadimi?</Text>
          </TouchableOpacity>
        </View>

        {/*  */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#111",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontWeight: 700,
    fontSize: Fonts.F20,
    color: "#fff",
    marginBottom: 10
  },
  subtitle: {
    marginBottom: 50,
    fontSize: Fonts.F18,
    fontWeight: 400,
    color: Colors.orangeText
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30
  },
  input: {
    backgroundColor: Colors.opacityOrange,
    borderRadius: 10,
    width: 75,
    height: 75,
    textAlign: "center",
    fontSize: 24,
    color: "#fff"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.8,
    height: 80,
    backgroundColor: Colors.orange,
    borderRadius: 50,
    marginBottom: 20
  },
  buttonText: {
    fontSize: Fonts.F20,
    color: Colors.fontWhite,
    fontWeight: "bold"
  },
  timer: {
    color: Colors.fontWhite,
    marginBottom: 10,
    textAlign: "center",
    fontSize: Fonts.F20,
    fontWeight: 400
  },
  link: {
    color: Colors.fontWhite,
    fontSize: Fonts.F20,
    textDecorationLine: "underline"
  }
});

/*


*/

// import {
//   Dimensions,
//   Image,
//   ImageBackground,
//   NativeSyntheticEvent,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   TextInputKeyPressEventData,
//   View
// } from "react-native";
// import React, { useState, useRef } from "react";
// import { StatusBar } from "expo-status-bar";
// import { router } from "expo-router";
// import { Colors, Fonts } from "../shared/tokens";

// const { width, height } = Dimensions.get("window");

// const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
// const inputs = useRef<Array<TextInput | null>>([]);

// // ✏️ Raqam kiritilganda ishlaydi
// const handleChange = (text: string, index: number) => {
//   if (/^\d$/.test(text)) {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     // Keyingi inputga o'tish
//     if (index < inputs.current.length - 1) {
//       inputs.current[index + 1]?.focus();
//     }
//   } else if (text === "") {
//     const newOtp = [...otp];
//     newOtp[index] = "";
//     setOtp(newOtp);
//   }
// };

// // ⌫ Backspace bosilganda ishlaydi
// const handleKeyPress = (
//   e: NativeSyntheticEvent<TextInputKeyPressEventData>,
//   index: number
// ) => {
//   if (e.nativeEvent.key === "Backspace") {
//     // Agar input bo‘sh bo‘lsa, oldingi inputga o‘tamiz
//     if (otp[index] === "" && index > 0) {
//       inputs.current[index - 1]?.focus();
//       const newOtp = [...otp];
//       newOtp[index - 1] = "";
//       setOtp(newOtp);
//     } else {
//       // Aks holda shu inputni o‘chiramiz
//       const newOtp = [...otp];
//       newOtp[index] = "";
//       setOtp(newOtp);
//     }
//   }
// };

// // ☑️ Tasdiqlash tugmasi bosilganda
// const handleSubmit = () => {
//   const code = otp.join("");
//   console.log("Yuborilgan kod:", code);

//   // 🔄 Inputlarni tozalash
//   setOtp(["", "", "", ""]);

//   // Birinchi inputga qayta fokus
//   inputs.current[0]?.focus();

//   router.push("sign-up");
// };

// const SiguUpOtp = () => {
//   return (
//     <View>
//       <StatusBar style="light" />
//       <ImageBackground
//         style={{ width: width, height: height }}
//         source={require("../assets/images/sign-up-backgroungImg.png")}
//       >
//         <View style={{}}>
//           <Pressable
//             onPress={() => router.push("/sign-up")}
//             style={{ position: "absolute", top: 76, left: 32 }}
//           >
//             <Image source={require("../assets/icons/arrow.left.png")} />
//           </Pressable>
//         </View>

//         <View style={styles.container}>
//           <StatusBar style="light" />
//           <ImageBackground
//             source={require("../assets/images/4th-background-img.png")}
//             style={{ width: width, height: height }}
//           >
//             <View
//               style={{
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "absolute",
//                 left: 0,
//                 right: 0,
//                 top: 120
//               }}
//             >
//               <Text style={styles.title}>PAROLNI TIKLASH</Text>
//               <Text style={styles.subtitle}>
//                 SMS orqali kelgan kodni kiriting
//               </Text>

//               <View style={styles.inputRow}>
//                 {otp.map((digit, index) => (
//                   <TextInput
//                     style={styles.input} // Inputning tashqi ko‘rinishi
//                     key={index} // Har bir input uchun unikal kalit
//                     ref={(ref) => {
//                       inputs.current[index] = ref; // Har bir inputni ref massivga saqlaymiz
//                     }}
//                     maxLength={1} // Faqat bitta raqam kiritish mumkin
//                     keyboardType="number-pad" // Klaviatura raqamli bo‘ladi
//                     value={digit} // Inputda hozirgi qiymat ko‘rsatiladi
//                     onChangeText={(text) => handleChange(text, index)} // Raqam kirganda funksiyani chaqiramiz
//                     onKeyPress={(e) => handleKeyPress(e, index)} // ⌫ ushlaydi
//                     autoFocus={index === 0} // Birinchi input avtomatik fokusda bo‘ladi
//                     placeholder=""
//                     placeholderTextColor="#ccc"
//                   />
//                 ))}
//               </View>

//               <Pressable style={styles.button} onPress={handleSubmit}>
//                 <Text style={styles.buttonText}>Tasdiqlash</Text>
//               </Pressable>

//               <Text style={styles.timer}>
//                 30 soniyadan so‘ng qayta sms jo‘natishingiz mumkin
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.link}>SMS kelmadimi?</Text>
//               </TouchableOpacity>
//             </View>

//             {/*  */}
//           </ImageBackground>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default SiguUpOtp;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#111",
//     flex: 1,
//     justifyContent: "center"
//   },
//   title: {
//     fontWeight: 700,
//     fontSize: Fonts.F20,
//     color: "#fff",
//     marginBottom: 10
//   },
//   subtitle: {
//     marginBottom: 50,
//     fontSize: Fonts.F18,
//     fontWeight: 400,
//     color: Colors.orangeText
//   },
//   inputRow: {
//     flexDirection: "row",
//     gap: 10,
//     marginBottom: 30
//   },
//   input: {
//     backgroundColor: Colors.opacityOrange,
//     borderRadius: 10,
//     width: 75,
//     height: 75,
//     textAlign: "center",
//     fontSize: 24,
//     color: "#fff"
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: width * 0.8,
//     height: 80,
//     backgroundColor: Colors.orange,
//     borderRadius: 50,
//     marginBottom: 20
//   },
//   buttonText: {
//     fontSize: Fonts.F20,
//     color: Colors.fontWhite,
//     fontWeight: "bold"
//   },
//   timer: {
//     color: Colors.fontWhite,
//     marginBottom: 10,
//     textAlign: "center",
//     fontSize: Fonts.F20,
//     fontWeight: 400
//   },
//   link: {
//     color: Colors.fontWhite,
//     fontSize: Fonts.F20,
//     textDecorationLine: "underline"
//   }
// });
