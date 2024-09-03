import Counter from '@/components/Counter';
import MonComponent from '@/components/MonComponent';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';


export default function index() {
  const [name, setName] = useState('Jean');

  const [list, setList] = useState([0, 1, 2, 3]);


  function changeName() {
    setName('Bloup');
  }
  //On peut aussi déclarer la fontion en fat-arrow si on veut
  // const changeName = () => {

  // };

  function addToList() {
    // list.push(4); //Ne pas faire ça, car on doit toujours utiliser les set...
    setList([
      ...list,
      4]);
  }

  return (
    <View>
      <Text onPress={() => setName('Autre nom')}>{name}</Text>

      <TextInput value={name} onChange={(event) => setName(event.nativeEvent.text)} />

      {list.map((item, index) => <Text key={index}>{item}</Text>)}


      <MonComponent />
      <Counter />

       {/* <Text onPress={changeName}>{name}</Text> */}
    </View>
  );
}