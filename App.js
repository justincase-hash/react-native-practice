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
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppButton from './app/components/AppButton';

export default function App() {   
  return (    
      <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
      }}>
        <AppButton title="Login" onPress={() => console.log("Tapped")}/>
      </View>
  );      
}

