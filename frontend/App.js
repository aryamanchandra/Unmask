import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Analytics from "./screens/Analytics";
import Settings from "./screens/Settings";
import Home from "./screens/Home.js";
import Surveillance from "./screens/Surveillance";
import AddFloor from "./screens/AddFloor";
import AddRoom from "./screens/AddRoom";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      style={styles.bottomBar}
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#00ADB5",
        tabBarItemStyle: {
          // margin:0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Icons
                name="home"
                size={30}
                color={tabInfo.focused ? "#00ADB5" : "#8e8e93"}
                style={styles.icons}
              />
            );
          },
        }}
        component={Home}
      />

      <Tab.Screen
        name="Analytics"
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="stats-chart"
                size={28}
                color={tabInfo.focused ? "#00ADB5" : "#8e8e93"}
              />
            );
          },
        }}
        component={Analytics}
      />
      <Tab.Screen
        name="Surveillance"
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Icons
                name="cctv"
                size={28}
                color={tabInfo.focused ? "#00ADB5" : "#8e8e93"}
              />
            );
          },
        }}
        component={Surveillance}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="settings-sharp"
                size={26}
                color={tabInfo.focused ? "#00ADB5" : "#8e8e93"}
              />
            );
          },
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddFloor"
          component={AddFloor}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddRoom"
          component={AddRoom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#00ADB5",
  },
  bottomBar: {
    backgroundColor: "000",
    marginHorizontal: 0,
    marginVertical: 0,
  },
  icons: {
    padding: 0,
    margin: 0,
  },
});
