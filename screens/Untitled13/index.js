import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.MfRnHdvL} renderItem={({
        item
      }) => <View style={styles.HBLGQaiT}></View>} ItemSeparatorComponent={() => <View style={styles.SYFaFwRY} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MfRnHdvL: {
    position: "absolute",
    width: 100,
    height: 150
  },
  HBLGQaiT: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  SYFaFwRY: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled13;