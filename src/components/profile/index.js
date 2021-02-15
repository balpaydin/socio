import React from "react";
import { Text, StyleSheet, View, } from "react-native"
import Avatar from './avatar'

const index = ({url}) => {

    return (
        <View style={styles.container}>
            <Avatar url={url} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})

export default index;