import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.top}>
      <Text style={styles.header}>
        <Image
          source={require("./assets/circle-question-solid.png")}
          style={styles.image}
        />{" "}
        Uni-Guesser!{" "}
        <Image
          source={require("./assets/ranking-star-solid.png")}
          style={styles.image2}
        />
      </Text>
      <View style={styles.container}>
        <View style={styles.SquareShapeView} />
        <View style={styles.SquareShapeView} />
        <View style={styles.SquareShapeView} />
        <View style={styles.SquareShapeView} />
      </View>
      <View style={styles.RectangleShapeView} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    fontSize: 200,
    backgroundColor: "#0C2340",
    alignItems: "center",
  },
  header: {
    fontSize: 60,
    alignItems: "center",
    paddingLeft: "400px",
    paddingRight: "400px",
    borderBottomWidth: 3,
    borderBottomColor: "#B2A268",
    color: "#B2A268",
  },
  container: {
    flexDirection: "row",
  },
  SquareShapeView: {
    width: 300,
    height: 300,
    marginTop: "10%",
    marginRight: "4%",
    marginLeft: "-2%",
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
  },
  RectangleShapeView: {
    marginTop: "15%",
    width: 600,
    height: 60,
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
  },
  image: {
    width: 30,
    height: 30,
  },
  image2: {
    width: 30,
    height: 30,
  },
});
