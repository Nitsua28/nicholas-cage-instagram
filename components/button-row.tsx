import { View, StyleSheet, Text, Button } from "react-native";

export default function ButtonRow(){
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title={"Follow"} ></Button>
            </View>
            <View style={styles.button}>
                <Button title={"Message"} ></Button>
            </View>
            <View style={styles.dropButton}>
                <Button  title={"v"} ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
      width: "100%",
      height: 100,
      flex:1,
      flexDirection:"row"
    },
    button:{
        flex: 4,
        backgroundColor:"blue",
        margin: 3
    },
    dropButton:{
        flex: 1,
        margin: 3
    },

  });