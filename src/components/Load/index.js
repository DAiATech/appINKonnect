import React from 'react';
import { ActivityIndicator, View } from 'react-native';

function Load() {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
    </View>
  );
}

export default Load;