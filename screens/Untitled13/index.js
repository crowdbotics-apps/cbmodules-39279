import { currencyexchangeintegration_get_convert_read } from "../../store/currencyExchangeIntegration/currencyexchangeintegration_response_get_CurrencyExchangeorConverts.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView , Text} from "react-native";

const Untitled13 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currencyexchangeintegration_get_convert_read({
      from: "USD",
      to: "EUR"
    }));
  }, []);

  const exchangeData = useSelector(state => state.Currencyexchangeintegration_response_get_CurrencyExchangeorConverts.entities    );

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.MfRnHdvL} renderItem={({
        item
      }) => <View style={styles.HBLGQaiT}>

        <Text>From : {item.query.from}</Text>
        <Text>To : {item.query.to}</Text>
        <Text>Date : {item.date}</Text>

      </View>} ItemSeparatorComponent={() => <View style={styles.SYFaFwRY} />} data={exchangeData} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MfRnHdvL: {
  
  },
  HBLGQaiT: {
    width: "100%",
    height: 60,
    backgroundColor: "#d3d3d3",
    borderRadius:10,
    justifyContent:'center',
    paddingLeft:10
  },
  SYFaFwRY: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled13;