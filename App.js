// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Alubijid from './components/Alubijid';
import Laguindingan from './components/Laguindingan';
import Libertad from './components/Libertad';
import Tagoloan from './components/Tagoloan';
import Villanueva from './components/Villanueva';
import Bus102 from './components/Bus102';
import Bus103 from './components/Bus103';
import Bus104 from './components/Bus104';
import Bus105 from './components/Bus105';
import Bus202 from './components/Bus202';
import Bus203 from './components/Bus203';
import Bus204 from './components/Bus204';
import Bus205 from './components/Bus205';
import Bus302 from './components/Bus302';
import Bus303 from './components/Bus303';
import Bus304 from './components/Bus304';
import Bus305 from './components/Bus305';
import Bus402 from './components/Bus402';
import Bus403 from './components/Bus403';
import Bus404 from './components/Bus404';
import Bus405 from './components/Bus405';
import Bus502 from './components/Bus502';
import Bus503 from './components/Bus503';
import Bus504 from './components/Bus504';
import Bus505 from './components/Bus505';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Alubijid" component={Alubijid} options={{ headerShown: false }} />
        <Stack.Screen name="Laguindingan" component={Laguindingan} options={{ headerShown: false }} />
        <Stack.Screen name="Libertad" component={Libertad} options={{ headerShown: false }} />
        <Stack.Screen name="Tagoloan" component={Tagoloan} options={{ headerShown: false }} />
        <Stack.Screen name="Villanueva" component={Villanueva} options={{ headerShown: false }} />
        <Stack.Screen name="Bus102" component={Bus102} options={{ headerShown: false }} />
        <Stack.Screen name="Bus103" component={Bus103} options={{ headerShown: false }} />
        <Stack.Screen name="Bus104" component={Bus104} options={{ headerShown: false }} />
        <Stack.Screen name="Bus105" component={Bus105} options={{ headerShown: false }} />
        <Stack.Screen name="Bus202" component={Bus202} options={{ headerShown: false }} />
        <Stack.Screen name="Bus203" component={Bus203} options={{ headerShown: false }} />
        <Stack.Screen name="Bus204" component={Bus204} options={{ headerShown: false }} />
        <Stack.Screen name="Bus205" component={Bus205} options={{ headerShown: false }} />
        <Stack.Screen name="Bus302" component={Bus302} options={{ headerShown: false }} />
        <Stack.Screen name="Bus303" component={Bus303} options={{ headerShown: false }} />
        <Stack.Screen name="Bus304" component={Bus304} options={{ headerShown: false }} />
        <Stack.Screen name="Bus305" component={Bus305} options={{ headerShown: false }} />
        <Stack.Screen name="Bus402" component={Bus402} options={{ headerShown: false }} />
        <Stack.Screen name="Bus403" component={Bus403} options={{ headerShown: false }} />
        <Stack.Screen name="Bus404" component={Bus404} options={{ headerShown: false }} />
        <Stack.Screen name="Bus405" component={Bus405} options={{ headerShown: false }} />
        <Stack.Screen name="Bus502" component={Bus502} options={{ headerShown: false }} />
        <Stack.Screen name="Bus503" component={Bus503} options={{ headerShown: false }} />
        <Stack.Screen name="Bus504" component={Bus504} options={{ headerShown: false }} />
        <Stack.Screen name="Bus505" component={Bus505} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
