import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './src/navigation/MealsNavigator';
import { useScreens } from 'react-native-screens';
useScreens(); // 


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
const App = () =>  {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigator />;
}

export default App;