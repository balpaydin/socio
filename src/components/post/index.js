import React,{useEffect} from "react";
import { Text, StyleSheet, View } from "react-native"
import { Divider } from "react-native-elements"
import Image from './image'
import Description from './description'

const index = ({avatarUrl , postUrl}) => {


    useEffect(()=>{
        console.log(avatarUrl);
    },[])

    
    return (
        <View style={styles.container}>
            <Image url={postUrl} avatarUrl={avatarUrl}/>
            <Description />
            <Divider style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 360
    },
    divider : {
        marginTop:24
    }
})

export default index;