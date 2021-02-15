import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { Icon } from "react-native-elements"

const description = () => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>40 Likes <Text style={{ fontSize: 10, color: "#adb5bd", fontWeight: "600" }}>1 hour ago</Text></Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>@dualipa <Text style={{ fontSize: 12, color: "#000", fontWeight: "600" }}>New Concert</Text></Text>
                <Text style={{ fontSize: 10, color: "#adb5bd", fontWeight: "600" }}>See all 200 Comments</Text>
            </View>
            <View style={styles.right}>
                <Icon
                    name="heart"
                    size={28}
                    color="#ff0a54"
                    type="ionicon"
                    style={{ margin: 2 }}
                />
                <Icon
                    name="chatbubble-outline"
                    size={28}
                    color="#000"
                    type="ionicon"
                    style={{ margin: 2 }}
                />
                <Icon
                    name="paper-plane-outline"
                    size={28}
                    color="#000"
                    type="ionicon"
                    style={{ margin: 2 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "10%",
        marginRight: "10%",
        alignItems: "center"
    },
    right: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default description;