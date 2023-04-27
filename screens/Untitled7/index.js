import { FlatList } from "react-native";
import { paypalservices_get_v1_billing_plans_plan_id_list } from "../../store/paypalServices/paypalservices_response_get_GetPlanDetails.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(paypalservices_get_v1_billing_plans_plan_id_list({
      plan_id: "P-99K13116DM709293EMOWDTPQ"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.NpIfbOso} renderItem={({
        item
      }) => <View style={styles.ZzvMigNC}></View>} ItemSeparatorComponent={() => <View style={styles.LCXmllTN} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NpIfbOso: {
    position: "absolute",
    width: 100,
    height: 150
  },
  ZzvMigNC: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  LCXmllTN: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled7;