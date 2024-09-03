import { useState } from "react";
import { Button, Text, View } from "react-native";


//manière alternative de déclarer un component, avec un const et une fat-arrow
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="-" onPress={() => setCount(count-1)} />
      <Text>{count}</Text>
      <Button title="+" onPress={() => setCount(count+1)}/>

    </View>
  );
}

export default Counter;