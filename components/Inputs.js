import { useState } from "react";
import { Button, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Inputs({ submitHandler }) {
  const [text, setText] = useState("");
  const submit = () => {
    if (text !== "") {
      submitHandler(text);
    }
    setText("");
  };
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        value={text}
        placeholder="type here..."
        keyboardType="default"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submit();
        }}
      >
        <MaterialIcons name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 57,
    width: "100%",
    backgroundColor: "#babdc1",
    position: "absolute",
    bottom: 20,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    paddingTop: 5,
    zIndex: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
  button: {
    display: "flex",
    alignItems: "center",
    height: "65%",
    width: "10%",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});
