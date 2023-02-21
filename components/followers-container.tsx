import { View, Image, StyleSheet } from "react-native";
import TwoRow from "./tworow";

export default function FollowersContainer(){
    return(
        <View style={styles.container}>
            <Image style={styles.image}source={{uri: "https://imgb.srgcdn.com/WYVhRmMOovC4cjNC8GC1.jpg"}}></Image>
            <View style={styles.tworowcontainer}>
                <TwoRow num= {999999} word="Posts"/>
                <TwoRow num= {999999} word="Followers"/>
                <TwoRow num= {0} word="Following"/>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        width: "100%",
        height: "20%"
        
    },
    image:{
      borderRadius: 200 / 2,
      width: 100,
      height: 100,
      marginRight: 10
      
    },
    tworowcontainer:{
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        height: 100
    }
    
  });