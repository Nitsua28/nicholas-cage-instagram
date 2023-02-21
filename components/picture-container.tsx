import { Image } from "react-native"
export default function PictureContainer(props: {url:string}){

    return(
        <Image style={{width: 130, height: 120}} source={{uri:  props.url }}></Image>
    )
}