import React from "react";
import { Text, StyleSheet, View } from "react-native"

const header = () => {

    return (
        <View style={styles.container}>
            <Text style={{ color: "#ff0a54", fontSize: 18, fontWeight: "600" }}>•My Feed</Text>
            <Text style={{ color: "#b0b5b3", fontSize: 18, fontWeight: "600" }}>#Trending</Text>
            <Text style={{ color: "#b0b5b3", fontSize: 18, fontWeight: "600" }}>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 15,
        height: 60,
        width: "100%",
        backgroundColor: "#f8f9fa",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        color: "white",
    },
})

export default header;