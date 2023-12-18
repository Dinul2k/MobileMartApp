import React from 'react';
import { View, Pressable,Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';


const LoginScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar />

      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <View style={[ { transform: [{ translateX: -10 }, { translateY: -200 }], position: "center" }]}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                height: 400,
                width: 400,
                borderRadius: 20,
                top: 10,
                
            
                // Adjust positioning properties as needed
              }}
            />
          </View>
          <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 460,
                    width: "100%"
                }}>
                    

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: -2,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>

          

        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#99d6ea',
    borderRadius: 20,
    padding: 20,
    // marginBottom: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default LoginScreen;
