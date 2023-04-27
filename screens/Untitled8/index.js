import { oddsbetting_get_sports_read } from "../../store/oddsBetting/oddsbetting_response_get_GetSports.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { BETTING_API_KEY } from "@env";

const Untitled8 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(oddsbetting_get_sports_read({
      apiKey: BETTING_API_KEY
    }));
  }, []);
  const bettingList = useSelector(state => state.Oddsbetting_response_get_GetSports.entities);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.dEMvYved} renderItem={({
        item
      }) => <View style={styles.BkViCWWY}>

        <Text>Title: {item.title}</Text>
        <Text style={styles.oSXtrvRb}>Description: {item.description}</Text>
        <Text>Group: {item.group}</Text>

      </View>} ItemSeparatorComponent={() => <View style={styles.RwAlVkIJ} />} data={bettingList[0]} keyExtractor={(item, index) => index} /></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  dEMvYved: {// height: 150
  },
  BkViCWWY: {
    width: "100%",
    backgroundColor: "#d3d3d3",
    paddingLeft: 10,
    paddingVertical: 10
  },
  RwAlVkIJ: {
    backgroundColor: "#fff",
    height: 5
  },
  oSXtrvRb: {
    marginVertical: 10
  }
});
export default Untitled8;