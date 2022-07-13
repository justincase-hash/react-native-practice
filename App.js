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

export default function App() {   
  return ( 
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}> 
    
      <AppText>This is react native app</AppText>
    
    </View>
  );      
}

