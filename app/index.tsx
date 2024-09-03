import Counter from '@/components/Counter';
import MonComponent from '@/components/MonComponent';
import { Link } from 'expo-router';
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
    //On utilise donc plutôt un set et de la destructuration pour créer un nouveau
    //tableau sans modifier l'ancienne valeur. C'est aussi ce qu'on fait pour les objets
    setList([
      ...list,
      4]);
  }

  return (
    <View>
      <Link href="/list">To List</Link>
      <Link href="/dog">To Dog</Link>
      <Text onPress={() => setName('Autre nom')}>{name}</Text>

      <TextInput value={name} onChange={(event) => setName(event.nativeEvent.text)} />
      {/* Pour faire une boucle dans le template, on utilise pas un for mais la 
      fonction .map() des tableau qui va créer un nouveau tableau (sans modifier l'ancien)
      où chaque valeur de ce nouveau tableau sera remplacée par le retour de la fonction
      qu'on met dans le map. Ici on fait donc un tableau de <Text> */}
      {list.map((item, index) => <Text key={index}>{item}</Text>)}


      <MonComponent message='chaîne de caractère' />
      <MonComponent message={name} />
      <Counter />

       {/* <Text onPress={changeName}>{name}</Text> */}
    </View>
  );
}