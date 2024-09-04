import { SafeAreaView, Text } from "react-native";
import {DeviceMotion} from 'expo-sensors'
import { useEffect, useState } from "react";



export default function sensors() {

  const [rotation, setRotation] = useState({
    alpha: 0,
    beta: 0,
    gamma:0
  });

  useEffect(() => {
    const sub = DeviceMotion.addListener(data => setRotation({...data.rotation}));
    
    return () => sub.remove();
  }, []);


  return (
    <SafeAreaView>
      <Text>alpha : {rotation.alpha}, beta: {rotation.beta}, gamma: {rotation.gamma}</Text>
      </SafeAreaView>
  )
}