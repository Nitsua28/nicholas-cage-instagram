import { View, Text, StyleSheet } from "react-native";

export type TwoRowProps={
    num: number,
    word: string
}
export default function TwoRow(props: TwoRowProps){
    return(
        <View style={styles.container}>
            <Text>{props.num}</Text>
            <Text>{props.word}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    
    
  });