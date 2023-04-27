import { oddsbetting_get_sports_read } from "../../store/oddsBetting/oddsbetting_response_get_GetSports.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(oddsbetting_get_sports_read({
      apiKey: "39165d7edfb4efe631e1abd722efb282"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.dEMvYved} renderItem={({
        item
      }) => <View style={styles.BkViCWWY}></View>} ItemSeparatorComponent={() => <View style={styles.RwAlVkIJ} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  dEMvYved: {
    position: "absolute",
    width: 100,
    height: 150
  },
  BkViCWWY: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  RwAlVkIJ: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled8;