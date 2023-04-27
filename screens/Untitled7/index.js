import { paypalservices_get_v1_billing_plans_plan_id_list } from "../../store/paypalServices/paypalservices_response_get_GetPlanDetails.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { PAYPAL_PLAN_ID } from "@env";

const Untitled7 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(paypalservices_get_v1_billing_plans_plan_id_list({
      plan_id: PAYPAL_PLAN_ID
    }));
  }, []);
  const paypalData = useSelector(state => state.Paypalservices_response_get_GetPlanDetails.entities);
  console.log("STATE", paypalData);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
      <View>
        <Text>NAME: {paypalData?.name}</Text>
        <Text style={styles.CRlTVGNX}>DESCRIPTION: {paypalData?.description}</Text>
        <Text>TAXES: {paypalData?.taxes?.percentage}%</Text>
      </View>
    </ScrollView>
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
  },
  CRlTVGNX: {
    marginVertical: 10
  }
});
export default Untitled7;