import { FlatList } from "react-native";
import { best365api_get_inplay_filter_read } from "../../store/bestAPI/best365api_response_get_Bet365InplayFilters.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView , Text} from "react-native";

const Untitled10 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(best365api_get_inplay_filter_read({
      sport_id: 1
    }));
  }, []);

  const leagueData = useSelector(state => state.Best365api_response_get_Bet365InplayFilters.entities);

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.kOcmShrH} renderItem={({
        item
      }) => <View style={styles.HKNXdXUm}>
        <Text>League: {item?.league?.name}</Text>
        <Text>Home: {item?.home?.name}</Text>
        <Text>Away: {item?.away?.name}</Text>
      </View>} ItemSeparatorComponent={() => <View style={styles.bhlfKyFs} />} data={leagueData && leagueData[0]?.results} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kOcmShrH: {
  },
  HKNXdXUm: {
    width: "100%",
    backgroundColor: "#d3d3d3",
    borderRadius:10,
    paddingLeft:10,
    paddingVertical:10

  },
  bhlfKyFs: {
    backgroundColor: "#fff",
    height: 2
  }
});
export default Untitled10;