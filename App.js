import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, Alert, Platform, StatusBar} from 'react-native';


export default function App() {  
  const handlePress = () => console.log("text pressed");
  return ( 
    // style - the most right object overwrites the style of the behind object 
    <SafeAreaView style={ [styles.container, containerStyle] }>
      <Text numberOfLines={1} onPress={handlePress}> Hello React Native. A really long text. I wanna make this really really long text
      Hello React Native. A really long text. I wanna make this really really long text
      </Text> 
      <Button title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no")}
          ])
        }    
      /> 

      <Button title="Click Me"
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "orange" } 
// StyleSheet validates the key property of the object.  
// style can be separated in different file and use import to use the style 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
