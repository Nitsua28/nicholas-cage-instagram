import { View, StyleSheet, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Footer(){
    return(
        <View style={styles.container}>
            
            <View style={styles.tab}>
                <AntDesign name="home" size={24} color="black" />
            </View>
            <View style={styles.tab}>
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <View style={styles.tab}>
                <AntDesign name="plussquareo" size={24} color="black" />
            </View>
            <View style={styles.tab}>
                <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View style={styles.tab}>
            <Image style={styles.image}source={{uri: "https://imgb.srgcdn.com/WYVhRmMOovC4cjNC8GC1.jpg"}}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: "row",
        height: 100,
        width: "100%",
        bottom: 0,
      
      
      
    },
    tab:{
        flex:1,
        alignItems:"center"
    },
    image:{
        borderRadius: 200 / 2,
        width: 20,
        height: 20,
        
      },
    
  });