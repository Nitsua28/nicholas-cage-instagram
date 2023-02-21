import { View, StyleSheet } from "react-native";
import PictureContainer from "./picture-container";

export default function Grid(){
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <PictureContainer url={"https://www.etsy.com/img/15020412/r/il/455abc/2328156575/il_570xN.2328156575_4m7l.jpg"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://i.ytimg.com/vi/JrQkgLLL9XQ/sddefault.jpg"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/nicolas-bunny-cage-nicholas-cage-funny-wall-art-print-nic-cage-funny-gift-fathers-day-ag-family.jpg"}/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <PictureContainer url={"https://media1.popsugar-assets.com/files/thumbor/GYThmEJSj5qz4Oy_E_rAQDYwp7w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/01/06/965/n/1922283/205aadedca881286_my-hair-is-a-bird-argument-invalid.jpg"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/nicolas-shrek-cage-nicholas-cage-funny-wall-art-print-nic-cage-funny-gift-fathers-day-ag-family.jpg"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://m.media-amazon.com/images/I/91X2beM+2mL.jpg"}/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <PictureContainer url={"https://imgix.ranker.com/user_node_img/50016/1000309225/original/jimmy-cage-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://i.pinimg.com/originals/50/cb/08/50cb085f28faa563a5e286ecadd3d1bf.jpg"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/12003880_715119458589226_4852184616196604239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8sha5VqKMWAAX9yPALj&_nc_ht=scontent.fsac1-2.fna&oh=00_AfD9u2eUHFYGCCayab4pHxCkg334Fy_3aStUNzKrJjfb-Q&oe=641BAD92"}/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <PictureContainer url={"https://www.denofgeek.com/wp-content/uploads/2022/04/Nicolas-Cage-in-Kick-Ass.jpeg?w=1024"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://imgix.ranker.com/list_img_v2/7221/3187221/original/3187221-u1"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://i.pinimg.com/originals/91/e8/26/91e826fb820b5d325994c384bbe4936e.jpg"}/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <PictureContainer url={"https://ninedollarmugs.com/gi/1/85_RSpt7Uy7.jpg?1555443625"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://video-images.vice.com/articles/59526923de3dc55407e63849/lede/1498576162376-cage12.jpeg?crop=0.4274xw:1xh;0.2165xw,0xh"}/>
                </View>
                <View style={styles.column}>
                <PictureContainer url={"https://i.pinimg.com/originals/77/d4/ab/77d4abbbe1221530619798b6252b7d2f.jpg"}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
      width: "100%",
      height: "100%",
      flex:1,
      flexDirection:"column"
    },
    row:{
        flex:1,
        flexDirection:"row"
    },
    column:{
        flex:1,
        width: "33%",
        height: "33%"
    }

  });