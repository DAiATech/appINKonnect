import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    outerContainer: {
      width: "100%",
      height: "100%",
      backgroundColor:'#121212'
    },
    innerContainer: {
      width: "100%",
      height: "100%"
    },
    topContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingHorizontal: 16
    },
    messageContainer: {
      flexDirection: "row",
      marginTop: 16,
      alignItems: "center",
      backgroundColor: "#C6AC8F",
      padding: 8,
      borderRadius: 4
    },
    avatar: {
     
    },
    perfilImg:{
      width: 38,
      height: 38,
      borderRadius: 50,
      overflow: "hidden",
      marginRight: 16
    },
    avatarContent: {
      fontSize: 30,
      textAlign: "center",
      textAlignVertical: "center"
    },
    messageContent: {
      flex: 1
    },
    bottomContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: 16
    },
    textInput: {
      flex: 1,
      backgroundColor: "#C6AC8F",
      borderRadius: 4,
      padding: 16,
      elevation: 2
    },
    submitButton: {
      position: "absolute",
      right: 32
    },
    
  });