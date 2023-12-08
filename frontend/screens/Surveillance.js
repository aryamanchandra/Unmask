import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Surveillance = () => {
  const [theme, setTheme] = useState(["Room 1", "Room 2", "Room 3"]);
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddRoom = (element) => {
    navigation.navigate("AddRoom",{element});
  }

  const handleAddFloor = () => {
    navigation.navigate("AddFloor",);
  }

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Surveillance</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={20}
            color="#828282"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#4E4E4E"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            onSubmitEditing={handleChange}
            onFocus={handleChange}
            style={styles.textInput}
          />
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.subtitle}>Floor 1</Text>
            <TouchableOpacity onPress={() => handleAddRoom("Floor 1")}>
              <Ionicons
                name="add-circle-outline"
                size={28}
                color={"#00ADB5"}
                style={styles.addicon1}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
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
          </ScrollView>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.subtitle}>Floor 2</Text>
            <TouchableOpacity onPress={() => handleAddRoom("Floor 2")}>
              <Ionicons
                name="add-circle-outline"
                size={28}
                color={"#00ADB5"}
                style={styles.addicon1}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
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
          </ScrollView>
        </View>
        <View style={styles.addfloor}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleAddFloor}>
          <Text style={styles.buttonText}>Add More Floors</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Surveillance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 30,
    paddingBottom: 10,
    paddingTop: 60,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
    borderColor: "#3c3c3c",
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: "#fff",
  },
  addicon: {
    paddingTop: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#F8F8F8",
    // paddingBottom: 10,
  },
  subtitle: {
    color: "#00ADB5",
    fontWeight: "400",
    fontSize: 22,
    paddingLeft: 3,
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
    top: -30,
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
  tertiarycards: {
    marginBottom: 25,
    marginTop: 15,
    flex: 1,
  },
  tertiarycard: {
    backgroundColor: "#1c1c1c",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 175,
    width: 175,
    marginRight: 12,
  },
  tertiarycardTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
  },
//   addfloor: {
//     // flex: 1,
//     // justifyContent: "center",
//     // alignContent: "center",
//     backgroundColor: "1c1c1c",
//   },
  addfloor: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, 
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#efefef",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    color: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#111",
    // fontWeight:"700",
    fontSize: 18,
    textAlign: "center",
    paddingLeft:10,
  },
});
