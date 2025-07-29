// import { screens } from "@/shared/token";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Colors } from "../shared/tokens";

const { width, height } = Dimensions.get("window");

export default function App() {
  const ref = useRef<FlatList>(null);
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      id: 1,
      title: "Envoy — Yuk tashishning Eng Oson Yo’li",
      desc: "Yuk egalarini va haydovchilarni bog‘lovchi innovatsion platforma. Tez, ishonchli va qulay xizmat!",
      img: require("../assets/images/a.jpg"),
      btn: (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable
            style={{
              backgroundColor: Colors.orange,
              width: 40,
              height: 16,
              borderRadius: 25
            }}
            onPress={() => router.push("")}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage < pages.length - 1) {
                ref.current?.scrollToIndex({
                  index: activePage + 1,
                  animated: true
                });
                setActivePage(activePage + 1);
              }
            }}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage < pages.length - 1) {
                ref.current?.scrollToIndex({
                  index: activePage + 2,
                  animated: true
                });
                setActivePage(activePage + 2);
              }
            }}
          ></Pressable>
        </View>
      )
    },
    {
      id: 2,
      title: "Yukingizni tez va arzon yetkazib bering!",
      desc: "Envoy bilan yuk topish va yetkazish oson! Yukingizni joylang, eng yaxshi narx va ishonchli haydovchini tanlang.",
      img: require("../assets/images/b.png"),
      btn: (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage < pages.length - 1) {
                ref.current?.scrollToIndex({
                  index: activePage - 1,
                  animated: true
                });
                setActivePage(activePage - 1);
              }
            }}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.orange,
              width: 40,
              height: 16,
              borderRadius: 25
            }}
            onPress={() => ""}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage < pages.length - 1) {
                ref.current?.scrollToIndex({
                  index: activePage + 1,
                  animated: true
                });
                setActivePage(activePage + 1);
              }
            }}
          ></Pressable>
        </View>
      )
    },
    {
      id: 3,
      title: "Yangi buyurtmalarni toping va daromad oling!!!",
      desc: "Bo‘sh yurish yo‘q! Envoy bilan yuklarni toping, qulay narxda tashish va barqaror daromadga ega bo‘ling.",
      img: require("../assets/images/c.jpg"),
      btn: (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage) {
                ref.current?.scrollToIndex({
                  index: activePage - 2,
                  animated: true
                });
                setActivePage(activePage - 2);
              }
            }}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.opacityOrange,
              width: 16,
              height: 16,
              borderRadius: 25,
              opacity: 0.5
            }}
            onPress={() => {
              if (activePage) {
                ref.current?.scrollToIndex({
                  index: activePage - 1,
                  animated: true
                });
                setActivePage(activePage - 1);
              }
            }}
          ></Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.orange,
              width: 40,
              height: 16,
              borderRadius: 25
            }}
            onPress={() => ""}
          ></Pressable>
        </View>
      )
    }
  ];

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={[styles.page, {}]}>
        <LinearGradient
          colors={["#161616", "rgba(0,0,0,0)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.5 }}
          style={{
            width,
            height: height * 0.5,
            position: "absolute",
            top: 0,
            zIndex: 1
          }}
        />

        <Image
          resizeMode="cover"
          source={item.img}
          style={{
            position: "absolute",
            top: 0,
            height: height * 0.5,
            width: width
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 30,
            bottom: 200,
            right: 0
          }}
        >
          <Text style={{ marginBottom: 25 }}>{item.btn}</Text>

          <Text
            style={{
              color: Colors.fontWhite,
              marginBottom: 25,
              fontSize: 20,
              fontWeight: 700,
              width: 230
            }}
          >
            {item.title}
          </Text>

          <Text style={{ fontSize: 18, color: Colors.orangeText, width: 310 }}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  const handleNext = () => {
    if (activePage < pages.length - 1) {
      ref.current?.scrollToIndex({ index: activePage + 1, animated: true });
      setActivePage(activePage + 1);
    } else {
      router.push("first-screen");
    }
  };

  const handlePrev = () => {
    if (activePage > 0) {
      ref.current?.scrollToIndex({ index: activePage - 1, animated: true });
      setActivePage(activePage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        data={pages}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / width);
          console.log("Scroll offset:", offset, "Index:", index);
          setActivePage(index);
        }}
      />
      <View style={styles.buttons}>
        <Pressable onPress={handlePrev} style={styles.button}>
          <Text style={styles.buttonText}>Ortga</Text>
        </Pressable>
        <Pressable onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Oldinga</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616"
  },
  page: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

    flex: 1
  },
  imgGradient: {
    width: width,
    height: height * 0.5,
    position: "absolute",
    top: 0,
    zIndex: 1
  },
  buttons: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});
