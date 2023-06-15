import { openaiapi_get_v1_engines_engine_id_read } from "../../store/openAIAPI/openaiapi_response_get_Retrieveengines.slice.js";
import { openaiapi_post_v1_images_generations_create } from "../../store/openAIAPI/openaiapi_response_post_Createimages.slice.js";
import { openaiapi_post_v1_completions_create } from "../../store/openAIAPI/openaiapi_response_post_Createcompletions.slice.js";
import { openaiapi_get_v1_engines_list } from "../../store/openAIAPI/openaiapi_response_get_Listengines.slice.js";
import { openaiapi_post_v1_audio_translations_create } from "../../store/openAIAPI/openaiapi_response_post_Createtranslationaudios.slice.js";
import { openaiapi_post_v1_chat_completions_create } from "../../store/openAIAPI/openaiapi_response_post_Createchatcompletions.slice.js";
import { openaiapi_post_v1_audio_transcriptions_create } from "../../store/openAIAPI/openaiapi_response_post_Createtranscriptionaudios.slice.js";
import { openaiapi_post_v1_edits_create } from "../../store/openAIAPI/openaiapi_response_post_Createedits.slice.js";
import { openaiapi_get_v1_models_model_read } from "../../store/openAIAPI/openaiapi_response_get_RetrieveModels.slice.js";
import { openaiapi_get_v1_models_list } from "../../store/openAIAPI/openaiapi_response_get_Listmodels.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openaiapi_get_v1_models_list());
    dispatch(openaiapi_get_v1_models_model_read());
    dispatch(openaiapi_post_v1_edits_create());
    dispatch(openaiapi_post_v1_audio_transcriptions_create());
    dispatch(openaiapi_post_v1_chat_completions_create());
    dispatch(openaiapi_post_v1_audio_translations_create());
    dispatch(openaiapi_get_v1_engines_list());
    dispatch(openaiapi_post_v1_completions_create());
    dispatch(openaiapi_post_v1_images_generations_create());
    dispatch(openaiapi_get_v1_engines_engine_id_read());
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