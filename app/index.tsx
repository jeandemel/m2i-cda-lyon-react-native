import MonComponent from '@/components/MonComponent';
import { useState } from 'react';
import { Text, View } from 'react-native';


export default function index() {
  const [name, setName] = useState('Jean');


  function changeName() {
    setName('Bloup');
  }
  //On peut aussi déclarer la fontion en fat-arrow si on veut
  // const changeName = () => {

  // };

  return (
    <View>
      <Text onPress={() => setName('Autre nom')}>{name}</Text>
      <MonComponent />

       {/* <Text onPress={changeName}>{name}</Text> */}
    </View>
  );
}