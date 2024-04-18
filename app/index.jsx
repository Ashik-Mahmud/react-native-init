import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="h-full flex-1 justify-center items-center ">
      <View className="text-center flex items-center justify-center gap-3 flex-col">
        <Text style={{ fontSize: 20 }}>Welcome to Native App</Text>
        <Link
          href={"/home"}
          style={{
            backgroundColor: "skyblue",
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
        >
          Go to Home
        </Link>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
