import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import {
  useFonts,
  Lusitana_400Regular,
  Lusitana_700Bold,
} from "@expo-google-fonts/lusitana";
import { theme } from "./lib/theme";
import TicTacToe from "./pages/TicTacToe";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lusitana_400Regular,
    Lusitana_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <Box style={styles.container} backgroundColor={"primary.700"}>
        <StatusBar style="auto" />
        <TicTacToe />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
