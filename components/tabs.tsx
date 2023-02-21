import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Tabs(){
    return(
        <View style={styles.container}>
            <View style={styles.tab}>
                <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
            </View>
            <View style={styles.tab}>
                <Ionicons name="md-person-circle" size={24} color="black" />
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
    tab:{
        flex:1,
        borderWidth: 1,
        alignItems: "center"
    }

  });