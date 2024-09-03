import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



export default function ListNames() {
  const [names, setNames] = useState(['Bobby', 'Alouf', 'Mia', 'Ling']);
  const [name, setName] = useState('');

  function addName() {
    if (name.trim().length == 0) {
      return;
    }
    setNames([
      ...names,
      name
    ]);
    setName('');
  }

  return (
    <View style={styles.container}>
      <TextInput value={name} onChange={event => setName(event.nativeEvent.text)}
        onSubmitEditing={addName} />
      <Button title="Add" onPress={addName} />
      {names.map((item, index) => <Text key={index}>{item}</Text>)}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  }
})