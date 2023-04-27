import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView, Pressable } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled3");
      }} style={styles.tCXIyVzF}>
          <View>
            <Text style={styles.TlCNJwkp}>Calendly User</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("Untitled4");
      }} style={styles.gFMQjapI}>
          <View>
            <Text style={styles.lYmzAmST}>Emojis List</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("Untitled5");
      }} style={styles.awCxvYVB}>
          <View>
            <Text style={styles.evylKEFx}>Current Wheather </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {
        navigation.navigate("Untitled7");
      }}><View style={styles.zDjDHOLr}><Text style={styles.xqRNVEQa}>Paypal Serives</Text></View></Pressable>
      <Pressable onPress={() => {
        navigation.navigate("Untitled8");
      }}><View style={styles.vLlCSToA}><Text style={styles.YBOlFAmI}>Odds Betting List</Text></View></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled9");
      }}><View style={styles.LyQhBWiz}><Text style={styles.mYCQtHIw}>Advertisement Addbutler</Text></View></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled10");
      }}><View style={styles.YpafTaMB}><Text style={styles.RwqrjrGD}>Best 365 API</Text></View></Pressable><View style={styles.NNlmBpHC}><Text style={styles.RnETViTZ}>Game Stats API</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  tCXIyVzF: {
    height: 60,
    width: 140,
    backgroundColor: "#e6b0b0",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 246,
    left: 22
  },
  gFMQjapI: {
    height: 60,
    width: 140,
    backgroundColor: "#d1a6a6",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 247,
    left: 184
  },
  awCxvYVB: {
    height: 60,
    width: 140,
    backgroundColor: "#dea5a5",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 340,
    left: 28
  },
  zDjDHOLr: {
    height: 60,
    width: 140,
    backgroundColor: "#d6a1a1",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 328,
    left: 183
  },
  TlCNJwkp: {
    width: 132,
    height: 27,
    lineHeight: 10,
    fontSize: 19,
    borderRadius: 0,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    top: 24,
    left: 6
  },
  lYmzAmST: {
    width: 100,
    height: 29,
    lineHeight: 19,
    fontSize: 19,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 23
  },
  evylKEFx: {
    width: 122,
    height: 28,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 7,
    textAlign: "center"
  },
  vLlCSToA: {
    height: 60,
    width: 140,
    backgroundColor: "#dab2b2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 410,
    left: 14
  },
  YBOlFAmI: {
    width: 124,
    height: 36,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 11,
    left: 7,
    textAlign: "center"
  },
  xqRNVEQa: {
    width: 119,
    height: 28,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 13
  },
  LyQhBWiz: {
    height: 60,
    width: 140,
    backgroundColor: "#daadad",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 412,
    left: 183
  },
  mYCQtHIw: {
    width: 125,
    height: 33,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 15,
    left: 11,
    textAlign: "center",
    letterSpacing: 0
  },
  YpafTaMB: {
    height: 60,
    width: 140,
    backgroundColor: "#d6a4a4",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 493,
    left: 28
  },
  RwqrjrGD: {
    width: 118,
    height: 22,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 14
  },
  NNlmBpHC: {
    height: 60,
    width: 140,
    backgroundColor: "#d19b9b",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 498,
    left: 190
  },
  RnETViTZ: {
    width: 126,
    height: 28,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 16,
    left: 7
  }
});
export default Untitled2;