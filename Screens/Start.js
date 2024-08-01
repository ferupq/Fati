import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ScrollView, View } from 'react-native';

export default function start() {

    useEffect(() => {
        const setOrientation = async () => {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        };
    
        setOrientation();
    
        // Limpiar la orientación cuando se desmonte el componente
        return () => {
          ScreenOrientation.unlockAsync();
        };
      }, []);
    
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }}>
        <ScrollView

            
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
        >
           
        </ScrollView>
    
    </View>
  );
}
