import DogCard from "@/components/DogCard";
import { Dog } from "@/entities";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function dog() {
  const [list, setList] = useState<Dog[]>([
    {id:1,name:'Fido', breed:'Corgi', birthdate:'2024-04-12'},
    {id:2,name:'Rex', breed:'Dalmatian', birthdate:'2024-02-01'},
    {id:3,name:'Albert', breed:'American Bully', birthdate:'2021-04-23'},
  ]);

  useEffect(() => {
    axios.get('/api/dog').then(data => console.log(data));
  })
  
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => <DogCard dog={item} />}
      />
    </View>
  );
}