import { calendlyapi_get_users_me_read } from "../../store/calendlyAPI/calendlyapi_response_get_GetCalendlyUsers.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Connectors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calendlyapi_get_users_me_read({}));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable>
          <View style={styles.dKFulrhG}>
            <Pressable>
              <Text style={styles.FRTuaXjU}>Calendly User</Text>
            </Pressable>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.iJQsrEVr}>
            <Pressable>
              <Text style={styles.EvqtuZxp}>Emojis List</Text>
            </Pressable>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.OjXMRAUa}></View>
        </Pressable>
        <Pressable>
          <View style={styles.aNjbZmSK}></View>
        </Pressable>
        <Pressable>
          <View style={styles.CbLMHOYx}></View>
        </Pressable>
        <Pressable>
          <View style={styles.lQkOKjUO}></View>
        </Pressable>
        <Text style={styles.VKbXIZTl}>Connector Testing</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  dKFulrhG: {
    height: 61,
    width: 133,
    backgroundColor: "#878080",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 238,
    left: 22
  },
  iJQsrEVr: {
    height: 62,
    width: 132,
    backgroundColor: "#898383",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 239,
    left: 189
  },
  OjXMRAUa: {
    height: 62,
    width: 132,
    backgroundColor: "#877f7f",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 325,
    left: 194
  },
  aNjbZmSK: {
    height: 62,
    width: 130,
    backgroundColor: "#8d8585",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 328,
    left: 26
  },
  CbLMHOYx: {
    height: 59,
    width: 134,
    backgroundColor: "#8d8787",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 421,
    left: 29
  },
  lQkOKjUO: {
    height: 58,
    width: 131,
    backgroundColor: "#958989",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 421,
    left: 199
  },
  VKbXIZTl: {
    width: 338,
    height: 50,
    lineHeight: 49,
    fontSize: 34,
    borderRadius: 0,
    fontFamily: "Roboto",
    letterSpacing: 1,
    textAlign: "center",
    position: "absolute",
    top: 31,
    left: 9
  },
  FRTuaXjU: {
    width: 118,
    height: 24,
    lineHeight: 14,
    fontSize: 19,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 18,
    left: 7,
    color: "#f9f9f9"
  },
  EvqtuZxp: {
    width: 100,
    height: 22,
    lineHeight: 14,
    fontSize: 19,
    borderRadius: 0,
    position: "absolute",
    top: 23,
    left: 21,
    color: "#fdfdfd"
  }
});
export default Connectors;