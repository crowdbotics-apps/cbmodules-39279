import { FlatList } from "react-native";
import { gamestatsapi_get_scores_json_Games_list } from "../../store/gameStatsAPI/gamestatsapi_response_get_GetGameSchedules.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled11 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamestatsapi_get_scores_json_Games_list({
      key: "f97d471b78244b348a1a5161db3c4565"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.FooQbFAh} renderItem={({
        item
      }) => <View style={styles.nLhERrDu}></View>} ItemSeparatorComponent={() => <View style={styles.pBPEimKb} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  FooQbFAh: {
    position: "absolute",
    width: 100,
    height: 150
  },
  nLhERrDu: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  pBPEimKb: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled11;