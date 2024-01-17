import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import PokeManCard from "./Component/PokeManCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Growl", "Vine Whip", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokeManCard {...charmanderData} />
        <PokeManCard {...squirtleData} />
        <PokeManCard {...bulbasaurData} />
        <PokeManCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
