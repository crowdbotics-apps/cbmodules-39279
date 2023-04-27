import { ncaaintegration_get_nfl_odds_json_BettingMetadata_read } from "../../store/nCAAIntegration/ncaaintegration_response_get_GetBettingMetaData.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView , Text} from "react-native";

import { NCA_KEY } from "@env"

const Untitled12 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ncaaintegration_get_nfl_odds_json_BettingMetadata_read({
      key: NCA_KEY
    }));
  }, []);

  const ncaData = useSelector(state => state.Ncaaintegration_response_get_GetBettingMetaData.entities);

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.bLaWRBBf} renderItem={({
        item
      }) => <View style={styles.djyhTkpL}>
        <Text>Name : {item.Name}</Text>
      </View>} ItemSeparatorComponent={() => <View style={styles.BFCQbAUp} />} data={ncaData&& ncaData[0]?.BettingMarketTypes} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bLaWRBBf: {
   
  },
  djyhTkpL: {
    width: "100%",
    height: 60,
    backgroundColor: "#d3d3d3"
  },
  BFCQbAUp: {
    backgroundColor: "#fff",
    height: 2
  }
});
export default Untitled12;