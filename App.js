import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
 
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {   
  return (
    <WelcomeScreen />
  );      
}


/* 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
}); 
 <View
        style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? "100%" : "30%",
      }}></View>
      <Text numberOfLines={1} onPress={handlePress}> Hello React Native. A really long text. I wanna make this really really long text
      Hello React Native. A really long text. I wanna make this really really long text
      </Text> 

      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no")}
          ])
        }    
      /> 

      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", text => console.log(text))
        }    
      />

      <TouchableWithoutFeedback onPress={ () => console.log("test touchable") }>
        <Image 
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri : "https://picsum.photos/200/300"
          }}
      />
      </TouchableWithoutFeedback> 


*/
