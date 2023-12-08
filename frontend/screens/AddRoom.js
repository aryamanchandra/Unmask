import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import Icons from "react-native-vector-icons/FontAwesome5";
  import { useNavigation } from "@react-navigation/native";
  
  const AddFloor = ({ route }) => {
    const { element } = route.params;

    const [theme, setTheme] = useState(["Room 1", "Room 2", "Room 3"]);
    const [email, setEmail] = useState("");
    const [tags, setTags] = useState([
      "Admin",
      "Upper 1",
      "Upper2",
      "Lower 1",
      "Lower 2",
    ]);
  
    const navigation = useNavigation();
  
    const handleBack = () => {
      navigation.goBack();
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={handleBack} style={styles.iconbutton}>
            <Icons
              name="angle-left"
              size={30}
              color={"#fff"}
              style={styles.icon1}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Add Room to {element}</Text>
          <View style={styles.inputcontainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Room Name</Text>
            </View>
            <TextInput
              label="Floor Name"
              placeholder="Ground Floor"
              placeholderTextColor={"#4E4E4E"}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputcontainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Type</Text>
            </View>
            <TextInput
              label="type"
              placeholder="Crowd Detection"
              placeholderTextColor={"#4E4E4E"}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
          </View>
          <Text style={styles.subtitle}>Roles</Text>
          <View
            //   horizontal
            // decelerationRate={0}
            // snapToInterval={100}
            snapToAlignment={"center"}
            style={styles.tags}
          >
            {tags.map((element, key) => (
              <View style={styles.tagcont} key={key}>
                <Text style={styles.tagname}>{element}</Text>
              </View>
            ))}
          </View>
          <View style={styles.addfloor}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
              <Text style={styles.buttonText}>Add Room</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default AddFloor;
  
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
      textAlign:"center"
    },
    subtitle: {
      color: "#00ADB5",
      fontWeight: "400",
      fontSize: 22,
      paddingLeft: 5,
      marginTop: 15,
    },
    glass: {
      height: 330,
      aspectRatio: 1,
      alignSelf: "center",
      opacity: 0.95,
    },
    button: {
      backgroundColor: "#1c1c1c",
      width: 47,
      padding: 7,
      borderRadius: 30,
      marginHorizontal: 5,
      textAlign: "center",
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
    tags: {
      marginBottom: 10,
      marginTop: 10,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      // justifyContent: "center",
    },
    tagcont: {
      // backgroundColor: "#1c1c1c",
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 20,
      height: 35,
      width: 100,
      marginRight: 5,
      marginLeft: 5,
      borderColor: "#1c1c1c",
      borderWidth: 2,
      marginBottom: 10,
    },
    tagname: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "400",
      fontSize: 15,
    },
    tertiarycards: {
      marginBottom: 35,
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
    inputcontainer: {
      height: 65,
      position: "relative",
      marginTop: 15,
    },
    labelContainer: {
      position: "absolute",
      backgroundColor: "#000",
      top: -10,
      left: 25,
      padding: 5,
      zIndex: 50,
    },
    label: {
      color: "#828282",
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 25,
      paddingVertical: 8,
      margin: 5,
      marginTop: 10,
      borderRadius: 30,
      borderColor: "#828282",
      color: "#fff",
    },
    addfloor: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
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
      paddingLeft: 10,
    },
  });
  