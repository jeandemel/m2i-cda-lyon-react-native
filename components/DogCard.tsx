import { Dog } from "@/entities";
import { StyleSheet, Text, View } from "react-native";



interface Props {
  dog: Dog;
}

export default function DogCard({ dog }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{dog.name}</Text>
      <Text style={styles.subtitle}>{dog.breed}</Text>
      <Text style={styles.info}>{new Date(dog.birthdate).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 2, height: 2}
  },
  title: {
    fontSize: 20,
    fontWeight:'bold'
  },
  subtitle: {
    fontSize: 15,
    color:'grey'
  },
  info: {
    textAlign: 'right'
  }
})