import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useTransition } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  const [theme, setTheme] = useState(["Room 1", "Room 2", "Room 3", "Room 4"]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Hi, {"\n"}Aryaman</Text>
        <View style={styles.cardcontainer}>
            
          <Text style={styles.subtitle}>Summary</Text>
          <View style={styles.cardWrapper}>
            <Image
              source={require("../assets/glass.png")}
              style={styles.glass}
              resizeMode="contain"
            />
            <View style={styles.card}>
              <View style={styles.column}>
                <Text style={styles.cardTitle}>Visitors</Text>
                <Text style={styles.cardcontent}>200</Text>
                <Text style={styles.cardTitle}>No Mask Visitors</Text>
                <Text style={styles.cardcontent}>20</Text>
                <Text style={styles.cardTitle}>Known</Text>
                <Text style={styles.cardcontent}>150</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.cardTitle}>Occupancy</Text>
                <Text style={styles.cardcontent}>105</Text>
                <Text style={styles.cardTitle}>With Mask Visitors</Text>
                <Text style={styles.cardcontent}>180</Text>
                <Text style={styles.cardTitle}>Unknown</Text>
                <Text style={styles.cardcontent}>30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.header}>
            <Text style={styles.subtitle}>Pinned Rooms</Text>
            <TouchableOpacity>
              <Ionicons
                name="add-circle-outline"
                size={28}
                color={"#00ADB5"}
                style={styles.addicon}
              />
            </TouchableOpacity>
          </View>
        <View
          //   horizontal
          // decelerationRate={0}
          // snapToInterval={100}
          snapToAlignment={"center"}
          style={styles.tertiarycards}
        >
          {theme.map((element, key) => (
            <View
              style={styles.tertiarycard}
              key={key}
              // onPress={() => handleTheme(element)}
            >
              <Text style={styles.tertiarycardTitle}>{element}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 30,
    paddingBottom: 10,
    paddingTop: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#F8F8F8",
    paddingBottom: 10,
  },
  glass: {
    height: 330,
    aspectRatio: 1,
    alignSelf: "center",
    opacity: 0.95,
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 325,
    width: "100%",
    marginRight: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: "7%",
  },
  column: {
    flex: 1, // Take equal space in the row
    paddingHorizontal: 25,
  },
  subtitle: {
    color: "#00ADB5",
    fontWeight: "400",
    fontSize: 25,
    paddingLeft: 3,
    marginTop: 10,
  },
  cardTitle: {
    color: "#838383",
    //textAlign: "center",
    fontWeight: "400",
    fontSize: 19,
  },
  cardcontent: {
    paddingBottom: 20,
    color: "#dfdfdf",
    fontSize: 21,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  addicon: {
    paddingTop: 12,
  },
  tertiarycards: {
    marginBottom: 35,
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tertiarycard: {
    backgroundColor: "#1c1c1c",
    paddingVertical: 20,
    // paddingHorizontal: 10,
    borderRadius: 20,
    height: 175,
    width: "48%",
    marginBottom: 15,
  },
  tertiarycardTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
  },
});
