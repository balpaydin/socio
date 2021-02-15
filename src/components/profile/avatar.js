import React from "react";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const avatar = ({url}) => {

    return (
        <View style={styles.container}>
            <View>
                <Avatar
                    rounded
                    size={100}
                    source={{ uri: url }}
                    containerStyle={styles.avatarContainer}
                />
                <LinearGradient
                    start={{ x: 0.1, y: 1 }} end={{ x: 0.1, y: 0.1 }}
                    colors={['#ff5c8a', '#ff5c8a', '#ff0a54']}
                    style={styles.plus}>
                    <Icon
                        name="add"
                        size={28}
                        color="white"
                        type="ionicon"
                    />
                </LinearGradient>
            </View>
            <Text style={{ position: "absolute", left: width * 0.40, fontWeight: "bold", fontSize: 18 }}>Dua Lipa</Text>
            <View style={styles.rightContainer}>
                <Text style={{ fontSize: 10 }}>Kadıköy, Istanbul</Text>
                <Icon
                    name="location"
                    size={18}
                    color="#ff0a54"
                    type="ionicon"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatarContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: -height * 0.03,
        left: 30,
        borderColor: "#fff",
        borderWidth: 2,
    },
    plus: {
        left: 106,
        bottom: -14,
        width: 30,
        zIndex: 2,
        borderRadius: 40
    },
    rightContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        position: 'absolute',
        right: width * 0.05,
        zIndex: 2,
        borderRadius: 40
    },
    right: {
        width: 25,
        borderRadius: 40
    }
})


export default avatar;