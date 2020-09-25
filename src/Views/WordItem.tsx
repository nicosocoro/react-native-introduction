import React from "react";
import { Text, View } from "react-native";

interface Props {
  text: string;
}

export const WordItem = (props: Props) => {
  const text: string = props.text;

  return (
    <View>
      <Text style={styles.item}>{text}</Text>
    </View>
  );
};

const styles = {
  item: {
    color: "#FF0sds",
    borderColor: "#FF0000",
    borderWidth: 1.51,
  },
};
