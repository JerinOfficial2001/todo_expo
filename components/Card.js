import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import * as Icon from "react-icons/ai"
import { MaterialIcons } from "@expo/vector-icons";

export default function Card({ item, deleteFunction }) {
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.img} source={require("../assets/notes.png")} />
      </View>
      <View style={styles.header}>
        <Text>{item.text}</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            deleteFunction(item.id);
          }}
        >
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 60,
    width: 350,
    backgroundColor: "#babdd1",
    top: 30,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: "100%",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  img: {
    height: 40,
    width: 35,
  },
});
