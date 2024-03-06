import { Text, View, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>this is the about pages</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
