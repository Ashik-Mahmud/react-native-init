import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const MainLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-medium text-blue-500" : ""
              } text-xs`}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Text
              className={`${focused ? "font-bold text-blue-500" : ""}`}
              style={{ color: color }}
            >
              🏡
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-medium text-blue-500" : ""
              } text-xs`}
            >
              Categories
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Text
              className={`${focused ? "font-bold text-blue-500" : ""}`}
              style={{ color: color }}
            >
              📦
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-medium text-blue-500" : ""
              } text-xs`}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Text
              className={`${focused ? "font-bold text-blue-500" : ""}`}
              style={{ color: color }}
            >
              👤
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
