import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <>
      <StatusBar />

      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Image
            source={require("../assets/logo.png")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              marginBottom: 20,
            }}
          />

          <View style={{ marginBottom: 12, width: "80%" }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              color: COLORS.white,
            }}>Email address</Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder='Enter your email address'
                placeholderTextColor={COLORS.white}
                keyboardType='email-address'
                style={styles.input}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12, width: "80%" }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              color: COLORS.white,
            }}>Password</Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder='Enter your password'
                placeholderTextColor={COLORS.white}
                secureTextEntry={isPasswordShown}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={styles.eyeIcon}
              >
                {isPasswordShown ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.white} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.white} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: "80%", marginTop: "10%" }}>
            <Button
              title="Join Now"
              onPress={() => navigation.navigate("Welcome")}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <Pressable
                onPress={() => navigation.navigate("Welcome")}
              >
                <Text style={styles.signupLink}>Signup</Text>
              </Pressable>
            </View>
          </View>

        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    flexDirection: "row",
    color: COLORS.white,
  },
  input: {
    flex: 1,
    width: "100%",
    color: COLORS.white,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  signupText: {
    fontSize: 16,
    color: COLORS.white,
  },
  signupLink: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default LoginScreen;
