import { Post } from "@/entities";
import { useEffect, useState } from "react";
import axios  from "axios";
import {FlatList, View} from 'react-native';
import PostCard from "@/components/PostCard";

export default function posts() {

  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  
  async function fetchPosts() {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    setPostList(response.data);
  }

  async function removePost(post: Post) {
    const response = await axios.delete<void>('https://jsonplaceholder.typicode.com/posts/' + post.id);
    // fetchPosts(); //ça c'est ce qu'on ferait avec une vraie api pour mettre à jour la liste avec les data du serveur
    setPostList(
      postList.filter(item => item.id != post.id)
    );
  }

  return (
    <View>
    <FlatList
      data={postList}
      renderItem={({ item }) => <PostCard post={item} onDelete={removePost} />}
    />
  </View>
  );


}