import { ncaaintegration_get_nfl_odds_json_BettingMetadata_read } from "../../store/nCAAIntegration/ncaaintegration_response_get_GetBettingMetaData.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled12 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ncaaintegration_get_nfl_odds_json_BettingMetadata_read({
      key: "7f25b739792e44feaeb1532e35afdfb3"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.bLaWRBBf} renderItem={({
        item
      }) => <View style={styles.djyhTkpL}></View>} ItemSeparatorComponent={() => <View style={styles.BFCQbAUp} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bLaWRBBf: {
    position: "absolute",
    width: 100,
    height: 150
  },
  djyhTkpL: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  BFCQbAUp: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled12;