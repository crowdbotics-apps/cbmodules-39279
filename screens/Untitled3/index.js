import { FlatList } from "react-native"
import { calendlyapi_get_users_me_read } from "../../store/calendlyAPI/calendlyapi_response_get_GetCalendlyUsers.slice.js"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Pressable, Text } from "react-native"
import React from "react"
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native"

const Untitled3 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calendlyapi_get_users_me_read())
  }, [])

  const calendlyUser = useSelector(
    state => state.Calendlyapi_response_get_GetCalendlyUsers.entities
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: "#f0f0f1",
            padding: 10,
            position: "relative",
            flex: 1
          }}
        ></ScrollView>
      </Pressable>
      <FlatList
        style={styles.WPswhYDV}
        renderItem={({ item }) => (
          <View style={styles.ZsNganKg}>
            <Text style={{ marginRight: 25 }}>{item.resource.name}</Text>
            <Text>{item.resource.email}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.neHdNOfk} />}
        data={calendlyUser}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  WPswhYDV: {
    alignSelf: "center"
  },
  ZsNganKg: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    padding: 10,
    borderRadius: 10
  },
  neHdNOfk: {
    backgroundColor: "#000000",
    height: 1
  }
})
export default Untitled3
