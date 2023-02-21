import { View, Text, StyleSheet } from "react-native";

export default function Info(){
    return(
        <View style={{position: "relative"}}>
            <Text style={styles.text}>Nicolas Cage</Text>
            <Text style={styles.text}>Superstar Actor and walking Meme</Text>
            <Text style={styles.text}>https://www.thecagecage.com/</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: "left"
    }
  });