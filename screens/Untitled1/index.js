import { openaiapis_post_v1_completions_create } from "../../store/openAIAPIs/openaiapis_response_post_Createcompletions.slice.js";
import { openaiapis_get_v1_engines_list } from "../../store/openAIAPIs/openaiapis_response_get_Listengines.slice.js";
import { openaiapis_post_v1_chat_completions_create } from "../../store/openAIAPIs/openaiapis_response_post_Createchatcompletions.slice.js";
import { openaiapis_get_v1_engines_engine_id_read } from "../../store/openAIAPIs/openaiapis_response_get_Retrieveengines.slice.js";
import { openaiapis_get_v1_models_list } from "../../store/openAIAPIs/openaiapis_response_get_Listmodels.slice.js";
import { openaiapis_post_v1_images_generations_create } from "../../store/openAIAPIs/openaiapis_response_post_Createimages.slice.js";
import { openaiapis_post_v1_edits_create } from "../../store/openAIAPIs/openaiapis_response_post_Createedits.slice.js";
import { openaiapis_get_v1_models_model_read } from "../../store/openAIAPIs/openaiapis_response_get_RetrieveModels.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openaiapis_get_v1_models_model_read());
    dispatch(openaiapis_post_v1_edits_create());
    dispatch(openaiapis_post_v1_images_generations_create());
    dispatch(openaiapis_get_v1_models_list());
    dispatch(openaiapis_get_v1_engines_engine_id_read());
    dispatch(openaiapis_post_v1_chat_completions_create());
    dispatch(openaiapis_get_v1_engines_list());
    dispatch(openaiapis_post_v1_completions_create());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled1;