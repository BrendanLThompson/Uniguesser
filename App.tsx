import React from "react";
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

const Item = ({ uni }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.uni}>{uni}</Text>
    </View>
  );
};

const renderItem = ({ item }) => <Item uni={item.uni} />;

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
        <View style={styles.container}>
          <View style={styles.SquareShapeView}>
            <Image
              style={styles.Squareimg}
              source={require("./assets/ye.png")}
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
