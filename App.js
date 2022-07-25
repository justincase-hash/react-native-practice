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
import Card from './app/components/Card'
export default function App() {   
  return <View style={{
    backgroundColor: ' #f8f4f4',
    padding: 20,
    paddingTop: 100,
  }}>
    <Card 
      title="Red Jacket for sale"
      subTitle="$100"
      image={require("./app/assets/chair.jpg")}
      />
  </View>     
}

