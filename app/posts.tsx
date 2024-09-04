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

  return (
    <View>
    <FlatList
      data={postList}
      renderItem={({ item }) => <PostCard post={item} />}
    />
  </View>
  );


}