import React, {useEffect, } from "react";
import Routes from './src/routes';
import FlashMessage from "react-native-flash-message";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import AppLoading from 'expo-app-loading';
import * as Updates from "expo-updates";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
    <Routes />
    <FlashMessage icon="auto" duration={5500} style={{ marginTop: 0 }} />
    </>
  );

}
