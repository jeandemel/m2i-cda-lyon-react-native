import { SafeAreaView, Text, StyleSheet, View } from "react-native";
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

      <View style={{...styles.square, left: 100+rotation.gamma*100, top: 300+rotation.beta*150}} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'red'
  }
})