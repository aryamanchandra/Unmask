import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const Analytics = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mask, setMask] = useState("");
  const [crowdmask, setCrowdmask] = useState("");
  const [face, setFace] = useState("");  
  

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "You need to enable permission to access the image gallery."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Use result.assets[0].uri
      uploadImage(result.assets[0]); // Pass the asset object
    }
  };

  const uploadImage = async (imageAsset) => {
    const formData = new FormData();
    formData.append("image", {
      uri: imageAsset.uri,
      type: "image/jpeg",
      name: "image.jpeg",
    });

    try {
      const response = await axios.post(
        "http://192.168.45.11:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response from the Flask backend here
      console.log("Response from Flask:", response.data);
      setMask(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const selectCrowdImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "You need to enable permission to access the image gallery."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Use result.assets[0].uri
      uploadCrowdImage(result.assets[0]); // Pass the asset object
    }
  };

  const uploadCrowdImage = async (imageAsset) => {
    const formData = new FormData();
    formData.append("image", {
      uri: imageAsset.uri,
      type: "image/jpeg",
      name: "image.jpeg",
    });

    try {
      const response = await axios.post(
        "http://192.168.45.11:5000/crowdupload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response from the Flask backend here
      console.log("Response from Flask:", response.data);
      setCrowdmask(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const selectFaceImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "You need to enable permission to access the image gallery."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Use result.assets[0].uri
      uploadFaceImage(result.assets[0]); // Pass the asset object
    }
  };

  const uploadFaceImage = async (imageAsset) => {
    const formData = new FormData();
    formData.append("image", {
      uri: imageAsset.uri,
      type: "image/jpeg",
      name: "image.jpeg",
    });

    try {
      const response = await axios.post(
        "http://192.168.45.11:5000/uploadface",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response from the Flask backend here
      console.log("Response from Flask:", response.data);
      setFace(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Analytics</Text>
        </View>

        <Text style={styles.subtitle}>Face Mask Detection</Text>
        {selectedImage && (
          <View>
            <Text style={styles.mask}>{mask}</Text>
          </View>
        )}
        <View style={styles.addfloor}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={selectImage}>
          <Text style={styles.buttonText}>Select a photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Crowd Detection</Text>
        {selectedImage && (
          <View>
            <Text style={styles.mask}>{crowdmask}</Text>
          </View>
        )}
        <View style={styles.addfloor}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={selectCrowdImage}>
          <Text style={styles.buttonText}>Select a photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Face Recognition</Text>
        {selectedImage && (
          <View>
            <Text style={styles.mask}>{face}</Text>
          </View>
        )}
        <View style={styles.addfloor}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={selectFaceImage}>
          <Text style={styles.buttonText}>Select a photo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

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
  addicon: {
    paddingTop: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#F8F8F8",
    paddingBottom: 30,
  },
  subtitle: {
    color: "#00ADB5",
    fontWeight: "400",
    fontSize: 25,
    // paddingLeft: 3,
    textAlign:"center"
  },
  addfloor: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom:50, 
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#efefef",
    width: "60%",
    paddingVertical: 10,
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
  mask:{
    color:"#fff",
    fontSize:20,
    textAlign: "center",
  }
});
