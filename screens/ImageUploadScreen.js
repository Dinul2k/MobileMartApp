import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const ImageUploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access media library was denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const formData = new FormData();
        formData.append('image', {
          uri: result.uri,
          type: 'image/jpeg', // You may need to adjust the type based on the picked file
          name: 'image.jpg',
        });

        const response = await axios.post('http://127.0.0.1:5000/upload', formData);

        setSelectedImage(response.data.url);
      }
    } catch (error) {
      console.error('ImagePicker Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World! This is an image upload screen.</Text>

      {/* Button to pick and upload image */}
      <Button title="Upload Image" onPress={handleImageUpload} />

      {/* Display the uploaded image */}
      {selectedImage && (
        <View style={styles.uploadedImageContainer}>
          <Text>Uploaded Image:</Text>
          <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImageContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  uploadedImage: {
    width: 200,
    height: 200,
    marginTop: 8,
  },
});

export default ImageUploadScreen;
