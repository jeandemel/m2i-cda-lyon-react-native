import { useEffect, useState } from "react";
import { View,StyleSheet, Text  } from "react-native";
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function carto() {
  const [markers, setMarkers] = useState([
    {latitude:45.76125732771622, longitude:4.863190643503289, title:'M2I'},
    {latitude:45.760347055228095, longitude: 4.859638319185376, title:'Gare Part Dieu'}
  ])

  const [myPosition, setMyPosition] = useState({ latitude: 0, longitude: 0 });
  const [sub, setSub] = useState<any>();
  useEffect(() => {
    watchPos();

    return () => {
      if (sub) {
        sub.remove();
      }
    }
  }, []);
  
  async function watchPos() {
    await Location.requestForegroundPermissionsAsync();
    const subVal = await Location.watchPositionAsync({ accuracy: Location.Accuracy.Highest }, (location) => {
      console.log(location.coords);
      setMyPosition({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    });
    setSub(subVal);
  }


  function addMarker(latitude: number, longitude: number) {    
      setMarkers([
        ...markers,
        {latitude,longitude, title:'Test'}
      ])  
    
  }

  return (
    <View style={styles.container}> 
        <MapView onLongPress={event => addMarker(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)} region={{latitude:45.76125732771622, longitude:4.863190643503289, longitudeDelta: 0.01, latitudeDelta: 0.01}} style={styles.map}>
        {markers.map(item => 
          <Marker key={item.latitude+':'+item.longitude} coordinate={{latitude:item.latitude, longitude:item.longitude}} title={item.title} />

        )}
        
        {myPosition.latitude &&
          <Marker coordinate={{...myPosition}} title="Me" />
        }
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})