import React from "react";
import { Text, StyleSheet, View } from "react-native"
import { Avatar, Button, Icon } from "react-native-elements"

const header = () => {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        icon={
          <Icon
            name="home-outline"
            size={32}
            color="white"
            type="ionicon"
          />
        }
      />
      <Text style={styles.title}>Socio</Text>
      <View style={styles.right}>
        <Button
          type="clear"
          icon={
            <Icon
              name="paper-plane-outline"
              size={32}
              color="white"
              type="ionicon"
            />
          }
        />
        <Avatar
          source={{ uri: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg" }}
          rounded
          containerStyle={styles.avatarContainer}
          size={32}
        />
      </View>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: "white"
  }
})

export default header;