import { FlatList } from "react-native";
import { gamestatsapi_get_scores_json_Games_list } from "../../store/gameStatsAPI/gamestatsapi_response_get_GetGameSchedules.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView , Text} from "react-native";
import { GAME_STATS_KEY } from '@env'

const Untitled11 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamestatsapi_get_scores_json_Games_list({
      key: GAME_STATS_KEY
    }));
  }, []);

  const leagueData = useSelector(state => state.Gamestatsapi_response_get_GetGameSchedules.entities    );

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.FooQbFAh} renderItem={({
        item
      }) => <View style={styles.nLhERrDu}>
        <Text>HomeTeam: {item?.HomeTeam}</Text>
        <Text>LastPlay: {item?.LastPlay}</Text>

      </View>} ItemSeparatorComponent={() => <View style={styles.pBPEimKb} />} data={leagueData} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  FooQbFAh: {

  },
  nLhERrDu: {
    width: "100%",
    height: 60,
    backgroundColor: "#d3d3d3",
    borderRadius:10,
    justifyContent:'center',
    paddingLeft:10
  },
  pBPEimKb: {
    backgroundColor: "#fff",
    height: 2
  }
});
export default Untitled11;