import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
// import { useRouter } from 'expo-router';

export default function StartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://dartoo-web.vercel.app/" }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
});
