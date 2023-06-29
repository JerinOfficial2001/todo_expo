import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Inputs from "./components/Inputs";
import { useState } from "react";

export default function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Test 1",
      key: 1,
    },
    {
      id: 1,
      text: "Test 2",
      key: 2,
    },
    {
      id: 2,
      text: "Test 3",
      key: 3,
    },
  ]);
  const pressHandler = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };
  const submitHandler = (text) => {
    setTodos((prev) => {
      return [{ text: text, key: Math.random().toString() }, ...prev];
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO</Text>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Inputs submitHandler={submitHandler}/>
        {/* <FlatList 
        
        data={todos}
        renderItem={({item})=>(
          <Card item={item}/>
        )}
        /> */}
        {todos.map((item, key) => (
          <Card item={item} key={key} deleteFunction={pressHandler} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    position: "relative",
    top: 25,
    backgroundColor: "red",
    width: "100%",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
});
