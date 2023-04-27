import { FlatList } from "react-native";
import { advertisementadbutler_get_publishers_publisherid_read } from "../../store/advertisementAdButler/advertisementadbutler_response_get_RetrievePublishers.slice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView , Text} from "react-native";

const Untitled9 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(advertisementadbutler_get_publishers_publisherid_read({}));
  }, []);

  const advertismentData = useSelector(state => state.Advertisementadbutler_response_get_RetrievePublishers.entities    );

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.znrIAgfg} renderItem={({
        item
      }) => <View style={styles.wilIlYob}>

        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>

      </View>} ItemSeparatorComponent={() => <View style={styles.pfyhhYXr} />} data={advertismentData&& advertismentData[0]?.data} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  znrIAgfg: {
   
  },
  wilIlYob: {
    width: "100%",
    height: 60,
    backgroundColor: "#d3d3d3",
    justifyContent:'center',
    paddingLeft:10,
    borderRadius:10
  },
  pfyhhYXr: {
    backgroundColor: "#fff",
    height: 2
  }
});
export default Untitled9;