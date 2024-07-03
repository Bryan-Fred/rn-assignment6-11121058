import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

import dress1 from "./assets/dress1.png";
import dress2 from "./assets/dress2.png";
import dress3 from "./assets/dress3.png";
import dress4 from "./assets/dress4.png";
import dress5 from "./assets/dress5.png";
import dress6 from "./assets/dress6.png";
import dress7 from "./assets/dress7.png";
import dress8 from "./assets/dress4.png";
import Logo from './assets/Logo.png';

const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bars" size={22} color="black" />
        </TouchableOpacity>
        <Image source={Logo} style={styles.companyIcon} />
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={22} color="#868686" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.iconButton}>
            <Icon name="shopping-cart" size={22} color="#868686" />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  companyIcon:{
    position: 'absolute',
    left: '40%'
  },
  rightIcons: {
    flexDirection: 'row',
  },


});

export default HomeScreen;
