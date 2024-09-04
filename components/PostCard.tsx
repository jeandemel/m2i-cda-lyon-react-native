import { Post } from "@/entities";
import { Button, StyleSheet, Text, View } from "react-native";



interface Props {
  post: Post;
  onDelete: (post:Post) => void
}

export default function PostCard({ post,onDelete  }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.subtitle}>{post.userId}</Text>
      <Text>{post.body}</Text>
      <Button title="Delete" onPress={() => onDelete(post)}/>
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
})