import { Alert } from "react-native";

export function CustomAlert({ status, title, description }) {
  return Alert.alert(
    title,
    description,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ],
    { cancelable: false }
  );
}
