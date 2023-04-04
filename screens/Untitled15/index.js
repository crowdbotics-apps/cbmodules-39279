import { Text } from "react-native";
import { storeproducts_get_products_list } from "../../store/storeProducts/storeproducts_response_get_productlists.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled15 = () => {
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
    }}><Text style={styles.rmqkBToE}>{storeproducts_get_products_list.title}</Text></ScrollView>
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
  }
});
export default Untitled15;