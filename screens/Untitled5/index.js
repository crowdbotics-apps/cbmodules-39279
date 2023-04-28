import { zoomapi_get_users_list } from "../../store/zoomAPI/zoomapi_response_get_GetUserDetails.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const Untitled5 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(zoomapi_get_users_list({}));
  }, []);

  const zoomList = useSelector(state => state.Zoomapi_response_get_GetUserDetails.entities);

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.aVvYAujN} renderItem={({
        item
      }) => <View style={styles.PaBNVJOC}>
        <Text>
          Name: {item?.display_name}
        </Text>
        <Text>
          Email: {item?.email}
        </Text>
        <Text>
          Status: {item?.status}
        </Text>
      </View>} ItemSeparatorComponent={() => <View style={styles.NWDqHMNB} />} data={zoomList && zoomList?.users} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  aVvYAujN: {

  },
  PaBNVJOC: {
    width: "100%",
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    borderRadius:10,
    paddingLeft:10,
    paddingVertical:10
  },
  NWDqHMNB: {
    backgroundColor: "#fff",
    height: 2
  }
});
export default Untitled5;