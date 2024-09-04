import { SafeAreaView, Text, StyleSheet, View, Image, Button } from "react-native";
import {DeviceMotion} from 'expo-sensors'
import { useEffect, useState } from "react";
import { requestCameraPermissionsAsync,launchCameraAsync,MediaTypeOptions, launchImageLibraryAsync} from 'expo-image-picker'



export default function sensors() {

  const [rotation, setRotation] = useState({
    alpha: 0,
    beta: 0,
    gamma:0
  });
  const [image, setImage] = useState<string>();

  useEffect(() => {
    requestCameraPermissionsAsync();
    const sub = DeviceMotion.addListener(data => setRotation({...data.rotation}));
    
    return () => sub.remove();
  }, []);

  async function takePicture() {
    try {
      
      const result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images
      });
      if (result.assets && result.assets[0]) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
    }
    
  }


  return (
    <SafeAreaView>
      <Text>alpha : {rotation.alpha}, beta: {rotation.beta}, gamma: {rotation.gamma}</Text>
      {image ? 
        <Image source={{ uri: image }} style={{ ...styles.square, left: 100 + rotation.gamma * 100, top: 300 + rotation.beta * 150 }} />    
        :
        <Button title="Take a picture" onPress={takePicture}/>
      }
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