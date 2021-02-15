import React from "react";
import { StyleSheet, View, Image } from "react-native"
import Avatar from "../profile";

const image = ({url,avatarUrl}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:  url}} />
            <Avatar url={avatarUrl} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    image: {
        margin: 10,
        height: 220,
        borderRadius: 20,
        resizeMode: "contain"
    },
    title: {
        color: "white",
    },
})

export default image;