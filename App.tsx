import { StyleSheet, View} from 'react-native';
import Splash from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from './screens/LandingPage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      {/* <LandingPage /> */}
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
  }

});

// export default App;
