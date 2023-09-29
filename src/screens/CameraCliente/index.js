import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { ScrollView, ActivityIndicator, FlatList, Text, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, ImageSourcePropType, } from 'react-native';
import HeaderUsuario from "../../components/PagePreSet/HeaderUsuario";
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/TatuadoresProfilesDiscover';
import { useIsFocused } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { FILTERS } from "../../assets/data/filters";

import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from 'expo-face-detector';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import flowerImg from '../../assets/images/faceCamera/flowerBG.png';
import dropImg from '../../assets/images/faceCamera/drop.png';

export default function CameraCliente() {
  const isFocused = useIsFocused();

  const navigation = useNavigation();


  const [faceDetected, setFaceDetected] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [emoji, setEmoji] = useState(flowerImg);
  const [propsFace, setPropsFace] = useState();


  /* Quick fix：Set "javascript.validate.enable": false in your VS Code settings.*/

  const faceValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const faceValores = useSharedValue({
    x: 0,
    y: 0,
  });

  function handleFacesDetected({ faces }: FaceDetectionResult) {
    console.log(faces);
    const face = faces[0];

    if (face) {
      const { size, origin } = face.bounds;
      const { x, y } = face.RIGHT_CHEEK;
      faceValues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y,
        /* leftEyeX: x,
        leftEyeY: y, */
      }
      faceValores.value = {
        x: x,
        y: y,

      }
      setFaceDetected(true);

    } else {
      setFaceDetected(false);
    }
  }


  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    zIndex: 1,
    width: faceValues.value.width,
    height: faceValues.value.height,
    transform: [
      { translateX: faceValues.value.x },
      { translateY: faceValues.value.y },
    ],
    shadowColor: '#000',
    /* borderColor: '#f0f',
    borderWidth: 10 */
  }))

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission?.granted) {
    return;
  }
  return (
    <View style={styles.container}>
      <HeaderUsuario />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollFilters}>
        {
          FILTERS.map((story, index) => (
            <TouchableOpacity
              style={styles.storyContainer}
              onPress={() => setEmoji(story.filterImg)}>
              <Image style={styles.story} source={story.filterImg} />
              <Text style={styles.storyText}>{story.name.length > 5 ? story.name.slice(0, 7).toLocaleLowerCase() + '... ' : story.name.toLowerCase()}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View style={styles.containerCamera}>
        <View style={styles.cameraDiv}>
          {faceDetected &&
            <Animated.Image
              style={animatedStyle}
              source={emoji}
            />
          }
          {isFocused && <Camera style={styles.camera}
            type={CameraType.front}
            {...propsFace}
            onCameraReady={() => {
              setPropsFace({
                onFacesDetected: handleFacesDetected,
                faceDetectorSettings: {
                  mode: FaceDetector.FaceDetectorMode.fast,
                  detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                  runClassifications: FaceDetector.FaceDetectorClassifications.all,
                  FaceDetectorMode: FaceDetector.FaceDetectorMode.accurate,
                  minDetectionInterval: 100,
                  tracking: true,
                }
              })
            }}
          >

         </Camera>
          }
        </View>

        {/* <TouchableOpacity
          style={styles.btnCameraOpen}
          onPress={() => {
            navigation.navigate("...")

            Insert the path that client should follow 
          }}
        onPress={}
        >
          <Text style={styles.btnText}>Abrir Camera</Text>
          <Ionicons name="camera" size={30} color={"#EAE0D5"}></Ionicons>
        </TouchableOpacity> */}
      </View>

    </View >
  )
}