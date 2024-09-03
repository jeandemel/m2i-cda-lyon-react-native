import { Text } from "react-native";

interface Props {
  message: string;
}

/**
 * Les components React sont par convention en PascalCase avec
 * un nom qui match celui du fichier qu'on a créé. Un component
 * doit forcément être utilisé par un autre component ou "page"
 * pour pouvoir être affiché.
 */
export default function MonComponent({message}:Props) {
  
  return (
    <Text>Mon Component nul : {message}</Text>
    );
}