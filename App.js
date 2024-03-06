import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <Link replace href="./pages/Home" style={styles.linkStyle}>
        Home
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linkStyle: {
    padding: 50,
    borderWidth: 1,
    marginTop: 5,
  },
});
