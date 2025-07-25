import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Pressable,
  View,
  Dimensions
} from "react-native";
import { useState } from "react";
import OpenEye from "../../assets/svg-icons/openEye";
import { Colors, Fonts } from "../tokens";
import ClosedEye from "../../assets/svg-icons/closedEye";

const { width, height } = Dimensions.get("window");

export function Input({
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <View style={{ gap: 8 }}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={"#AFB2BF"}
        {...props}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible((state) => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <OpenEye /> : <ClosedEye />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: width * 0.9,
    // backgroundColor: "red",
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    height: 58,
    paddingHorizontal: 24,
    borderRadius: 50,
    fontSize: Fonts.F20,
    fontWeight: 700,
    color: Colors.inputBorder
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 22
  }
});
