import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, SafeAreaView, Pressable, Text } from "react-native"

const Untitled2 = () => {
  const navigation = useNavigation()

  const data1 = [
    {
      name: "Ncaa",
      screen: "Untitled12"
    },
    {
      name: "Currency Exchange",
      screen: "Untitled13"
    },
    {
      name: "Odds Betting List",
      screen: "Untitled8"
    },
    {
      name: "Advertisment Addbutler",
      screen: "Untitled9"
    },
    {
      name: "Calendly User",
      screen: "Untitled3"
    }
  ]

  const data2 = [
    {
      name: "Emojis List",
      screen: "Untitled4"
    },
    {
      name: "Zoom list",
      screen: "Untitled5"
    },
    {
      name: "Paypal Services",
      screen: "Untitled7"
    },
    {
      name: "Best 365 API",
      screen: "Untitled10"
    },
    {
      name: "Game Stats",
      screen: "Untitled11"
    }
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.buttonStyles}>
          {data1.map(item => (
            <Pressable
              onPress={() => {
                navigation.navigate(item.screen)
              }}
              style={styles.tCXIyVzF}
            >
              <Text style={styles.TlCNJwkp}>{item.name}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.buttonStyles}>
          {data2.map(item => (
            <Pressable
              onPress={() => {
                navigation.navigate(item.screen)
              }}
              style={styles.tCXIyVzF}
            >
              <Text style={styles.TlCNJwkp}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    flex: 1
  },
  tCXIyVzF: {
    height: 60,
    width: 140,
    backgroundColor: "#e6b0b0",
    borderRadius: 40,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  TlCNJwkp: {
    fontSize: 17,
    textAlign: "center"
  },
  buttonStyles: {
    width: "50%",
    height: "100%",
    alignItems: "center"
  }
})
export default Untitled2
