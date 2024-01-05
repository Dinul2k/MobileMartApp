import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageUploadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, This is Image Upload Screen</Text>
      {/* Add your image upload components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ImageUploadScreen;
