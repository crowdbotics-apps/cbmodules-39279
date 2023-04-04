import { FlatList } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { storeproducts_get_products_list } from "../../store/storeProducts/storeproducts_response_get_productlists.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled15 = () => {
  const {
    entities: storeproducts_response_get_products_list
  } = useSelector(state => state.storeproducts_response_get_products_list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeproducts_get_products_list());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.cqmijnCP} renderItem={({
        item
      }) => <View style={styles.SsRCIRHY}></View>} ItemSeparatorComponent={() => <View style={styles.OFAoDcNW} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  rmqkBToE: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cqmijnCP: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0
  },
  SsRCIRHY: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF"
  },
  OFAoDcNW: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled15;