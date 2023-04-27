import { FlatList } from "react-native";
import { calendlyapi_get_users_me_read } from "../../store/calendlyAPI/calendlyapi_response_get_GetCalendlyUsers.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calendlyapi_get_users_me_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <Pressable><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}></ScrollView></Pressable>
    <FlatList style={styles.WPswhYDV} renderItem={({
      item
    }) => <View style={styles.ZsNganKg}></View>} ItemSeparatorComponent={() => <View style={styles.neHdNOfk} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  WPswhYDV: {
    position: "absolute",
    width: 100,
    height: 150
  },
  ZsNganKg: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  neHdNOfk: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled3;