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
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Office Wear",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress1,
    },
    {
      id: "2",
      name: "Black",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress2,
    },
    {
      id: "3",
      name: "Church Wear",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress3,
    },
    {
      id: "4",
      name: "Lamerei",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress4,
    },
    {
      id: "5",
      name: "21WN",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress5,
    },
    {
      id: "6",
      name: "Lopo",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress6,
    },
    {
      id: "7",
      name: "21WN",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress7,
    },
    {
      id: "8",
      name: "lame",
      description: "reversible angora cardigan",
      price: "$120",
      image: dress8,
    },
  ]);

  const addToCart = async (product) => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      const cartItems = cart ? JSON.parse(cart) : [];
      const itemExists = cartItems.some((item) => item.id === product.id);
      if (!itemExists) {
        cartItems.push(product);
        await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
        alert("Product added to cart!");
      } else {
        alert("Product is already in the cart!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkCart = async () => {
      const cart = await AsyncStorage.getItem("cart");
      if (cart) {
        console.log("Cart:", JSON.parse(cart));
      }
    };

    checkCart();
  }, []);

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

      <View style={styles.ourStory}>
        <Text style={styles.ourStoryText}>OUR STORY</Text>
        <View style={styles.categoryFilterIcons}>
          <TouchableOpacity style={styles.circleIcon}>
            <Icon name="list-ul" size={20} color="#aaa" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleIcon}>
            <Icon name="filter" size={20} color="rgb(221, 80, 28)" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View>
              <Image source={item.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productInfo}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(item)}
            >
              <Icon name="plus" size={15} color="black" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
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

  productName:{
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'serif'
  },

  productInfo:{
    fontSize: 11,
    fontFamily: 'serif',
    color: '#868686'
  },

  productPrice:{
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: '500',
    color: 'rgb(221, 80, 28)'
  },

  ourStory: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
 
  ourStoryText:{
    fontSize: 22,
    letterSpacing: 3,
    fontFamily: 'serif',
  },

  categoryFilterIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },

  circleIcon: {
    backgroundColor: '#dfdcdca2',
    borderRadius: 20,
    height: 40,
    width: 40,
    padding: 10,
    marginHorizontal: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconButton: {
    padding: 10,
  },

  product: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f9f9f9",
    position: "relative",
  },

  image: {
    width: "100%",
    height: 150,
    objectFit: "contain",
  },

  infoContainer: {
    marginTop: 10,
    textAlign: "left",
    paddingLeft: 2,
    backgroundColor: 'white',
  },

  addButton: {
    position: "absolute",
    bottom: 80,
    right: -1,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;