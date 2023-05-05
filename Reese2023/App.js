import { DancingScript_500Medium } from "@expo-google-fonts/dancing-script";
import { Gabriela_400Regular } from "@expo-google-fonts/gabriela";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text, Image, Pressable } from "react";
import * as React from "react";

import { useFonts } from "expo-font";

import {styles}  from "./Styles";

const Stack = createNativeStackNavigator();
export default function App(){
   useFonts({
     'dancing': DancingScript_500Medium,
     'gabriela': Gabriela_400Regular,
   });
    return (
      <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
}

function Main(){
  return (
    <View style={styles.overlapGroup4}>
      <View style={styles.overlapGroup5}>
        <View style={styles.reese}>
          <Image style={styles.intersect1} source="./img/intersect2x.png" />
        </View>
        <Text style={styles.title}>
          <Text style={styles.span0}>"R"</Text>
          <Text style={styles.span1}>"e"</Text>
          <Text style={styles.span2}>"es"</Text>
          <Text style={styles.span3}>"e-o"</Text>
          <Text style={styles.span1}>"urc"</Text>
          <Text style={styles.span2}>"es"</Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.overlapGroupContainer}>
          <View style={styles.overlapGroup2}>
            <Pressable style={styles.mission}>"Mission"</Pressable>
          </View>
          <View style={styles.overlapGroup3}>
            <Pressable style={styles.beBRAVE}>"Be B.R.A.V.E."</Pressable>
          </View>
        </View>
        <View style={styles.overlapGroupContainer}>
          <View style={styles.overlapGroup1}>
            <Pressable style={styles.program}>Program</Pressable>
          </View>
          <View style={styles.overlapGroup}>
            <Pressable style={styles.pledge}>Pledge</Pressable>
          </View>
        </View>
      </View>
      <Image
        style={styles.braveLogo}
        source="./img/brave-logo2x.png"
        alt="BRAVE logo"
      />
    </View>
  );
}









