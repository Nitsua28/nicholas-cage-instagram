import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ButtonRow from "./components/button-row";
import FollowersContainer from "./components/followers-container";
import Footer from "./components/footer";
import Grid from "./components/grid";
import Header from "./components/header";
import Info from "./components/info";
import Tabs from "./components/tabs";


export function InstagramPage(){
    return(
        <View style={styles.container}>
            
            <View>
                <Header/>
            </View>
            <View >
                <FollowersContainer/>
            </View>
            <View>
                <Info/>
            </View>
            <View>
                <ButtonRow/>
            </View>
            <View>
                <Tabs/>
            </View>
            <View>
                <Grid/>
            </View>
            <View>
                <ScrollView stickyHeaderIndices={[0]} invertStickyHeaders={true}>
                    <Footer/>
                </ScrollView>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    
    container:{
      backgroundColor: "#F5F5F5",
      width: "100%",
      height: "100%",
      flex: 1,
      flexDirection: "column"
      
    },
    
  });