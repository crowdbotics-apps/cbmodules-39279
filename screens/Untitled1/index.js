import { openaiconnector_get_v1_engines_read } from "../../store/openaiconnector/openaiconnector_response_get_Listengines.slice.js";
import { openaiconnector_get_v1_engines_engine_id_read } from "../../store/openaiconnector/openaiconnector_response_get_Retrieveengines.slice.js";
import { openaiconnector_get_v1_models_read } from "../../store/openaiconnector/openaiconnector_response_get_ListModels.slice.js";
import { openaiconnector_post_v1_completions_create } from "../../store/openaiconnector/openaiconnector_response_post_Createcompletions.slice.js";
import { openaiconnector_post_v1_chat_completions_create } from "../../store/openaiconnector/openaiconnector_response_post_Createchatcompletions.slice.js";
import { openaiconnector_get_v1_models_model_read } from "../../store/openaiconnector/openaiconnector_response_get_Retrievemodels.slice.js";
import { openaiconnector_post_v1_images_generations_create } from "../../store/openaiconnector/openaiconnector_response_post_Createimages.slice.js";
import { openaiconnector_post_v1_edits_create } from "../../store/openaiconnector/openaiconnector_response_post_Createedits.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openaiconnector_post_v1_edits_create());
    dispatch(openaiconnector_post_v1_images_generations_create());
    dispatch(openaiconnector_get_v1_models_model_read());
    dispatch(openaiconnector_post_v1_chat_completions_create());
    dispatch(openaiconnector_post_v1_completions_create());
    dispatch(openaiconnector_get_v1_models_read());
    dispatch(openaiconnector_get_v1_engines_engine_id_read());
    dispatch(openaiconnector_get_v1_engines_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled1;