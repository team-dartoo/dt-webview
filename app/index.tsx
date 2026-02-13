import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function StartScreen() {
  // 현재 기기의 상하좌우 안전 영역 수치
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          // 안드로이드 상태바와 하단 네비게이션 바 영역을 모두 고려한 패딩 설정
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {/* 필요 시 상단 상태바 글자색 등을 설정 */}
      <StatusBar barStyle="dark-content" />

      <WebView
        source={{ uri: "https://dartoo-web.vercel.app/" }}
        textZoom={100}
        style={styles.webview}
        // 하단바와 겹침 현상을 방지하기 위해 스크롤 여백 최적화
        showsVerticalScrollIndicator={false}
      />
    </View>
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
