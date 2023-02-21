import React from "react"
import { Text, Image, StyleSheet, View } from "react-native"
import { AntDesign, Entypo } from '@expo/vector-icons'; 
export default function Header(){
    return(
        <View style={styles.container}>
            <AntDesign  style={styles.icon}name="caretleft" size={24} color="black" />
            <Text style={styles.headerText}>notTheBees448</Text>
            <Entypo style={styles.icon} name="dots-three-horizontal" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
      flex: 1,
      
    },
    container:{
      flex:4,
      flexDirection: "row",
      marginTop: "10%",
      height: 400,
      width: "100%"
      
    },
    headerText:{
      flex: 5,
      fontSize: 30,
      alignText: "center",
      justifyContent: "center"
    }
  });