import { FlatList } from "react-native";
import { best365api_get_inplay_filter_read } from "../../store/bestAPI/best365api_response_get_Bet365InplayFilters.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(best365api_get_inplay_filter_read({
      sport_id: 1
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.kOcmShrH} renderItem={({
        item
      }) => <View style={styles.HKNXdXUm}></View>} ItemSeparatorComponent={() => <View style={styles.bhlfKyFs} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kOcmShrH: {
    position: "absolute",
    width: 100,
    height: 150
  },
  HKNXdXUm: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  bhlfKyFs: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled10;