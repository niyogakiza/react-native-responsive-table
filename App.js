import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { StockTableResponsive } from "./components/main";

export default class App extends React.Component {
 render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.head}>Hello</Text>
        <StockTableResponsive />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    color: "#000000"
  },
  head: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
  }
})