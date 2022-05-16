import React, { useState, setState, useEffect } from "react";
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
import GetUniversityImages from "./ImageSearchApiController.js";
import APICommunicatorController from "./ImageSearchApiController.js";

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

const universityList = ["University of California, Los Angeles", "University of California, Irvine", "California State University, Northridge", "California State University, Long Beach", 
                        "University of Southern California", "California State Polytechnic University, Pomona", "College of the Canyons", "Pierce College"];
const renderItem = ({ item }) => <Item uni={item.uni} />;

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const answer = universityList[randomNum(0, universityList.length)];

function App() {
  const [hints, setHints] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstModal, setfirstModal] = useState(false);
  const [secondModal, setsecondModal] = useState(false);
  const [searchValue, setsearchValue] = useState();
  const [data, setdata] = useState();

  const toggleModal = () => {
    setfirstModal(!firstModal);
  };
  const toggleModal2 = () => {
    setsecondModal(!secondModal);
  };

  const images = () => {
    const random = [...Itest]
      .sort(() => Math.random() - 0.5)
      .map((hint) => ({ ...hint, id: Math.random() }));

    setHints(random);
    setTurns(0);
  };
  console.log(hints, turns);

  const [fieldUrl, setFieldUrl] = useState();
  const [mascotUrl, setMascotUrl] = useState();
  const [libraryUrl, setLibraryUrl] = useState();
  const [state, setState] = useState(null);

  const searchFieldImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text+" field").then((result) => {
      console.log(result);
      setFieldUrl(result);
    });
  };

  const searchMascotImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text+" logo").then((result) => {
      console.log(result);
      setMascotUrl(result);
    });
  };

  const searchLibraryImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text+" library").then((result) => {
      console.log(result);
      setLibraryUrl(result);
    });
  };

  useEffect(() => {
    searchFieldImage(answer);
    searchMascotImage(answer);
    searchLibraryImage(answer);    
  }, []);

  return (
    <View style={styles.top}>
      <Text style={styles.header}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require("./assets/circle-question-solid.png")}
            style={styles.image}
          />
        </TouchableOpacity>{" "}
        <Modal
          transparent={true}
          visible={firstModal}
          style={{ width: 600, height: 600 }}
        >
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View style={styles.modal}>
              <TouchableOpacity style={styles.Mimage} onPress={toggleModal}>
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
        <TouchableOpacity onPress={toggleModal2}>
          <Image
            source={require("./assets/ranking-star-solid.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Modal transparent={true} visible={secondModal}>
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View style={styles.modal}>
              <TouchableOpacity style={styles.Mimage} onPress={toggleModal2}>
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
        <div className="grid">
          {hints.map((hint) => (
            <div className="card" key={hint.id}>
              <div>
                <img className="front" src={hint.src} />
                <img
                  className="back"
                  src={require("./assets/yess.jpg")}
                  alt="imgback"
                />
              </div>
            </div>
          ))}
        </div>

        <View style={styles.SquareShapeView}>
          <Image
            id="img"
            style={styles.Squareimg}
            source={{ uri: fieldUrl }}
          />
        </View>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.Squareimg}
            source={{ uri: libraryUrl }}
          />
        </View>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.Squareimg}
            source={{ uri: mascotUrl }}
          />
        </View>
        <View style={styles.SquareShapeView}></View>
        <View style={styles.SquareShapeView} />
      </View>

      <View style={styles.searchList}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          value={searchValue}
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
        <button onClick={images}>Test</button>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  modal: {
    marginTop: "5%",
    width: 600,
    height: 600,
    borderWidth: 3,
    borderColor: "#B2A268",
    backgroundColor: "#0054A6",
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
