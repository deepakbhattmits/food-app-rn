import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './src/navigation/MealsNavigator';
import { useScreens } from 'react-native-screens';

import { createStore, combineReducers } from "redux";


// import { persistStore, persistReducer } from "redux-persist"
// import { PersistGate } from "redux-persist/integration/react"
// import storage from "redux-persist/lib/storage"

import { Provider } from 'react-redux';
import { mealsReducer } from "./src/store/reducers/mealsReducer";
useScreens(); //



// const persistConfig = {
//   key: "root",
//   storage
// };
// const persistedReducer = persistReducer(persistConfig, mealsReducer);

// const persistor = persistStore(store);

const  rootReducer = combineReducers({
  meals: mealsReducer
}) 
const store = createStore(rootReducer);

// const store =persistStore( persistedReducer)

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
  return (
      <Provider store={ store }>
         {/* <PersistGate loading={null} persistor={persistor}> */}
            <MealsNavigator />
        {/* </PersistGate> */}
      </Provider>
      );
}

export default App;