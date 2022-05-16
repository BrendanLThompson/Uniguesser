import React, { useState, setState, useEffect, FC } from "react";
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
  ScrollView,
  Button,
} from "react-native";
import { SearchBar } from "react-native-elements";
import GetUniversityImages from "./ImageSearchApiController.js";
import APICommunicatorController from "./ImageSearchApiController.js";
import Dropdown from "./components/Dropdown";

// Function to add our give data into cache
const addDataIntoCache = (cacheName, url, response) => {
  // Converting our response into Actual Response form
  const data = new Response(JSON.stringify(response));

  if ("caches" in window) {
    // Opening given cache and putting our data into it
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
      alert("Data Added into cache!");
    });
  }
};

let wrong = 0;
let correct = 0;
let plays = 1;
// let score = (correct / plays) * 100;
let mistake = 0;

const data = [
  { label: "University of California, Los Angeles" },
  { label: "University of California, Irvine" },
  { label: "California State University, Northridge" },
  { label: "California State University, Long Beach" },
  { label: "University of Southern California" },
  { label: "California State Polytechnic University, Pomona" },
  { label: "College of the Canyons" },
  { label: "Pierce College" },
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const answer = data[randomNum(0, data.length)];

const App: FC = () => {
  const [selected, setSelected] = useState(undefined);
  const [firstModal, setfirstModal] = useState(false);
  const [secondModal, setsecondModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showLibrary, setshowLibrary] = useState(false);
  const [showLogo, setshowLogo] = useState(false);
  const [fieldUrl, setFieldUrl] = useState();
  const [mascotUrl, setMascotUrl] = useState();
  const [libraryUrl, setLibraryUrl] = useState();
  const [state, setState] = useState(null);
  const [guesses, setGuesses] = useState(5);

  const data = [
    { label: "University of California, Los Angeles", value: "1" },
    { label: "University of California, Irvine", value: "2" },
    { label: "California State University, Northridge", value: "3" },
    { label: "California State University, Long Beach", value: "4" },
    { label: "University of Southern California", value: "5" },
    { label: "California State Polytechnic University, Pomona", value: "6" },
    { label: "College of the Canyons", value: "7" },
    { label: "Pierce College", value: "8" },
  ];

  const toggleModal = () => {
    setfirstModal(!firstModal);
  };
  const toggleModal2 = () => {
    setsecondModal(!secondModal);
  };

  const searchFieldImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text + " field").then(
      (result) => {
        console.log(result);
        setFieldUrl(result);
      }
    );
  };

  const searchMascotImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text + " logo").then(
      (result) => {
        console.log(result);
        setMascotUrl(result);
      }
    );
  };

  const searchLibraryImage = async (text) => {
    APICommunicatorController.GetUniversityImages(text + " library").then(
      (result) => {
        console.log(result);
        setLibraryUrl(result);
      }
    );
  };

  useEffect(() => {
    searchFieldImage(answer.label);
    searchMascotImage(answer.label);
    searchLibraryImage(answer.label);
  }, []);

  const ContentComponent = () => {
    return (
      <View>
        <Image style={styles.Squareimg} source={{ uri: libraryUrl }} />
      </View>
    );
  };

  const ContentComponent1 = () => {
    return (
      <View>
        <Image style={styles.Squareimg} source={{ uri: mascotUrl }} />
      </View>
    );
  };

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
              <View style={styles.txtContainer2}>
                {" "}
                Uni-Guessr! is a game that gives
                <br />
                you 5 tries to guess a university
                <br />
                from the pictures presented.
                <br />
                Simply select your guess in the
                <br />
                drop down menu below and click
                <br />
                the button. If your guess is
                <br />
                correct you win, if not, try again!
              </View>
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
              <View style={styles.txtContainer}>
                Guess Ratio: {(correct / (correct + wrong)) * 100}% <br />
                <br />
                Correct Guess: {correct} <br /> <br />
                Incorect Guesses: {wrong} <br /> <br />
              </View>
            </View>
          </View>
        </Modal>
      </Text>

      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.SquareShapeView}>
          <Image id="img" style={styles.Squareimg} source={{ uri: fieldUrl }} />
        </View>

        <View style={styles.SquareShapeView}>
          {showLibrary && <ContentComponent />}
        </View>

        <View style={styles.SquareShapeView}>
          {showLogo && <ContentComponent1 />}
        </View>
      </View>

      <View style={styles.buttonView}>
        <Button
          title="Submit"
          color="#0054A6"
          disabled={disabled}
          onPress={() => {
            if (selected.label == null) {
              mistake++;
            }
            if (selected.label == answer.label) {
              correct++;
              setDisabled(!disabled);
              setsecondModal(!secondModal);
            } else {
              wrong++;
              setGuesses(5 - wrong);
              if (wrong == 1) {
                setshowLibrary(!showLibrary);
              }
              if (wrong == 3) {
                setshowLogo(!showLogo);
              }
              if (wrong == 5) {
                setDisabled(!disabled);
              }
            }
          }}
        ></Button>
      </View>
      <View>
        <Text style={{ color: "#B2A268" }}>
          You have {guesses} guesses left!
        </Text>
      </View>
      <View style={styles.RectangleShapeView}>
        <Dropdown
          label="Select Item"
          data={data}
          onSelect={setSelected}
          style={{ width: 600 }}
        />
      </View>
    </View>
  );
};

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
    marginTop: "5%",
    marginRight: "3.75%",
    marginLeft: "-2%",
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
  },
  RectangleShapeView: {
    marginTop: "1%",
    width: 600,
    height: 56,
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
  },
  buttonView: {
    marginTop: "2%",
    width: 300,
    backgroundColor: "#0054A6",
    borderWidth: 3,
    borderColor: "#FFF200",
    color: "#FFF200",
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
  txtContainer: {
    color: "#B2A268",
    flexDirection: "row",
    fontSize: 40,
    marginTop: "22%",
    justifyContent: "center",
    textAlign: "center",
  },
  txtContainer2: {
    color: "#B2A268",
    flexDirection: "row",
    fontSize: 35,
    marginTop: "15%",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default App;
