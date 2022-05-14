import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = { firstModal: false, secondModal: false };
  }

  render() {
    return (
      <View style={styles.top}>
        <Text style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ firstModal: true });
            }}
          >
            <Image
              source={require("./assets/circle-question-solid.png")}
              style={styles.image}
            />
          </TouchableOpacity>{" "}
          <Modal transparent={true} visible={this.state.firstModal}>
            <View
              style={{
                backgroundColor: "#000000aa",
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginTop: "5%",
                  width: 600,
                  height: 600,
                  borderWidth: 3,
                  borderColor: "#B2A268",
                  backgroundColor: "#0054A6",
                }}
              >
                <TouchableOpacity
                  style={styles.Mimage}
                  onPress={() => {
                    this.setState({ firstModal: false });
                  }}
                >
                  <Image
                    source={require("./assets/circle-question-solid.png")}
                    style={styles.Mimage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          Uni-Guesser!{" "}
          <TouchableOpacity
            onPress={() => {
              this.setState({ secondModal: true });
            }}
          >
            <Image
              source={require("./assets/ranking-star-solid.png")}
              style={styles.image}
            />
          </TouchableOpacity>{" "}
          <Modal transparent={true} visible={this.state.secondModal}>
            <View
              style={{
                backgroundColor: "#000000aa",
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginTop: "5%",
                  width: 600,
                  height: 600,
                  borderWidth: 3,
                  borderColor: "#B2A268",
                  backgroundColor: "#0054A6",
                }}
              >
                <TouchableOpacity
                  style={styles.Mimage}
                  onPress={() => {
                    this.setState({ secondModal: false });
                  }}
                >
                  <Image
                    source={require("./assets/ranking-star-solid.png")}
                    style={styles.Mimage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
    marginTop: "5%",
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
  Mimage: {
    width: 30,
    height: 30,
    marginLeft: "2%",
    marginTop: "2%",
  },
});

export default App;
