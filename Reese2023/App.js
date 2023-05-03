import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import {View, Text, Image, Pressable} from React;

import {styles} from "Styles.js"
const Stack = createNativeStackNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={<Main {...mainData} />} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function Main(props) {
  const {
    intersect,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    place,
    beBRAVE,
    program,
    pledge,
    braveLogo,
  } = props;
  return (
    <View style = {styles.overlapGroup4}>
      <View style = {styles.overlapGroup5}>
        <View style = {styles.reese}>
          <Image style = {styles.intersect} src={intersect} alt="Intersect" />
        </View>
        <Text style = {styles.title}>
          <Text style = {styles.span0}>{spanText1}</Text>
          <Text style = {styles.span1}>{spanText2}</Text>
          <Text style = {styles.span2}>{spanText3}</Text>
          <Text style = {styles.span3}>{spanText4}</Text>
          <Text style = {styles.span1}>{spanText5}</Text>
          <Text style = {styles.span2}>{spanText6}</Text>
        </Text>
      </View>
      <View style = {styles.buttons}>
        <View style = {styles.overlapGroupContainer}>
          <View style = {styles.overlapGroup2}>
            <Pressable style = {styles.place}>{place}</Pressable>
          </View>
          <View style = {styles.overlapGroup3}>
            <Pressable style = {styles.beBRAVE}>{beBRAVE}</Pressable>
          </View>
        </View>
        <View style = {styles.overlapGroupContainer}>
          <View style = {styles.overlapGroup1}>
            <Pressable style = {styles.program}>{program}</Pressable>
          </View>
          <View style = {styles.overlapGroup}>
            <Pressable style = {styles.pledge}>{pledge}</Pressable>
          </View>
        </View>
      </View>
      <Image style = {styles.braveLogo} src={braveLogo} alt="BRAVE logo"/>
    </View>
  );
}


const mainData = {
  intersect: "Reese2023/assets/intersect@2x.png",
  spanText1: "R",
  spanText2: "e",
  spanText3: "es",
  spanText4: "e-o",
  spanText5: "Urc",
  spanText6: "es",
  place: "Mission",
  beBRAVE: "Be B.R.A.V.E.",
  program: "Program",
  pledge: "Pledge",
  braveLogo: "Reese2023/assets/brave-logo@2x.png",
};
