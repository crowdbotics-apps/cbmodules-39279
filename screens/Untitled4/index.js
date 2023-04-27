import { FlatList } from "react-native";
import { emojiintegration_get_emojis_list } from "../../store/emojiIntegration/emojiintegration_response_get_Newdatacalls.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emojiintegration_get_emojis_list({
      access_key: "40535714ec0f182c7aa18690c809cb637e8bf523"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.qojyWRyn} renderItem={({
        item
      }) => <View style={styles.HzppPOFy}></View>} ItemSeparatorComponent={() => <View style={styles.xiOUAFqy} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  qojyWRyn: {
    position: "absolute",
    width: 100,
    height: 150
  },
  HzppPOFy: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  xiOUAFqy: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled4;