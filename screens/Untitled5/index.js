import { zoomapi_get_users_list } from "../../store/zoomAPI/zoomapi_response_get_GetUserDetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(zoomapi_get_users_list({}));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.aVvYAujN} renderItem={({
        item
      }) => <View style={styles.PaBNVJOC}></View>} ItemSeparatorComponent={() => <View style={styles.NWDqHMNB} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  aVvYAujN: {
    position: "absolute",
    width: 100,
    height: 150
  },
  PaBNVJOC: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  NWDqHMNB: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled5;