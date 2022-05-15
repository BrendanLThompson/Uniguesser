import React, { useState } from "react";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import GetUniversityImages from "./ImageSearchApiController.js"

const Item = ({ uni }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.uni}>{uni}</Text>
    </View>
  );
};

const Itest = [
  { src: "./assets/ye.png" },
  { src: "./assets/yes.png" },
  { src: "./assets/yup.jpg" },
  { src: "./assets/Horimiya-OP.webp" },
];
const renderItem = ({ item }) => <Item uni={item.uni} />;
class App extends React.Component {
  // const [hints,setHints] = useState([])

  images = () => {
    const random = [...Itest]
      .sort(() => Math.random() - 0.5)
      .map((hint) => ({ ...hint, id: Math.random() }));

    setHints(random);
  };

  constructor() {
    super();
    this.state = {
      firstModal: false,
      secondModal: false,
    };
    const imageUri = GetUniversityImages("csun " + "field")
    console.log("results: " + imageUri);
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
          <Modal
            transparent={true}
            visible={this.state.firstModal}
            style={{ width: 600, height: 600 }}
          >
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
                <Text style={styles.test}>test test test</Text>
              </View>
            </View>
          </Modal>
          Uni-Guessr!{" "}
          <TouchableOpacity
            onPress={() => {
              this.setState({ secondModal: true });
            }}
          >
            <Image
              source={require("./assets/ranking-star-solid.png")}
              style={styles.image}
            />
          </TouchableOpacity>
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

        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={styles.SquareShapeView}>
            
            <Image
              id="img"
              style={styles.Squareimg}
              
              source={{uri: GetUniversityImages("csun " + "field")}}
            />
          </View>
          <View style={styles.SquareShapeView}>
            <Image
              style={styles.Squareimg}
              source={require("./assets/yes.png")}
            />
          </View>
          <View style={styles.SquareShapeView} />
          <View style={styles.SquareShapeView} />
        </View>

        <View style={styles.searchList}>
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            value={this.state.searchValue}
            containerStyle={{
              backgroundColor: "#0054A6",
              borderWidth: 3,
              borderBottomWidth: 3,
              borderTopWidth: 3,
              borderTopColor: "#FFF200",
              borderBottomColor: "#FFF200",
              borderColor: "#FFF200",
            }}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
          />
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  test: {
    fontSize: 19,
    marginTop: "10%",
    marginLeft: "2%",
  },
  container: {
    flexDirection: "row",
  },
  SquareShapeView: {
    width: 300,
    height: 300,
    marginTop: "10%",
    marginRight: "3.75%",
    marginLeft: "-2%",
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
  },
  Squareimg: {
    width: 293,
    height: 293,
    resizeMode: "contain",
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
  card: {
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  uni: {
    fontSize: 18,
    marginBottom: 15,
  },
  searchList: {
    marginTop: "5%",
    width: 600,
    height: 60,
    marginRight: "-1%",
  },
});

export default App;
