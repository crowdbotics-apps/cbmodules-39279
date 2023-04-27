import { FlatList } from "react-native";
import { advertisementadbutler_get_publishers_publisherid_read } from "../../store/advertisementAdButler/advertisementadbutler_response_get_RetrievePublishers.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(advertisementadbutler_get_publishers_publisherid_read({}));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.znrIAgfg} renderItem={({
        item
      }) => <View style={styles.wilIlYob}></View>} ItemSeparatorComponent={() => <View style={styles.pfyhhYXr} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  znrIAgfg: {
    position: "absolute",
    width: 100,
    height: 150
  },
  wilIlYob: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  pfyhhYXr: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled9;