import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { WordItem } from "./src/Views/WordItem";

interface Item {
  id: string;
  description: string;
}

const App = () => {
  const [text, setText] = useState<string>("");
  const [switchState, setSwitchState] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const clearInputText = () => setText("");

  const storeInputText = (): void => {
    items.push({
      id: "hola",
      description: text,
    } as Item);

    setItems(items);

    clearInputText();
  };

  const textByToggle = () => (switchState ? "Is enabled" : "Not enabled");

  return (
    <View style={styles.container}>
      <>
        <TextInput
          style={{ height: 40 }}
          placeholder="Add text to list"
          onChangeText={(text) => setText(text)}
          value={text}
        />

        <Button title="Add word" color="#FF0000" onPress={storeInputText} />
      </>
      <FlatList
        data={items}
        renderItem={({ item }) => <WordItem text={item.description} />}
      />

      <Text style={styles.item}>{textByToggle()}</Text>

      <Switch
        trackColor={switchColors}
        value={switchState}
        onValueChange={() => setSwitchState(!switchState)}
      />
    </View>
  );
};

const switchColors = {
  true: "fff",
  false: "#ee44fd",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  item: {
    color: "#FF0000",
    borderColor: "#FF0000",
    borderWidth: 0.51,
  },
});

export default App;
