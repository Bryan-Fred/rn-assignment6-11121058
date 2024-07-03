import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "./assets/Logo.png";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = async (item) => {
    try {
      const cartItems = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(cartItems);
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem("cart");
        if (cart) {
          setCart(JSON.parse(cart));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCartItems();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.companyIcon} />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={22} color="#868686" />
          </TouchableOpacity>
      </View>
      <View style={styles.checkoutHeader}>
        <View style={styles.leftLine}></View>
        <View style={styles.circle}></View>
        < Text style= {styles.checkoutTitle}>CHECKOUT</Text>
        <View style={styles.rightLine}></View>
      </View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View>
              <Image source={item.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productInfo}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item)}
              >
                <Icon name="times" size={15} color="rgb(212, 3, 3)" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
            <Text style={styles.estTotal}>EST. TOTAL</Text>
            <Text style={styles.total}>$240</Text>
        </View>
        <View style={styles.checkoutContainer}>
            <Icon name="shopping-cart" size={22} color="white" />
            <Text style={styles.checkoutText}>CHECKOUT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    height: 35,
  },

  checkoutHeader:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },

  leftLine:{
    width: 65,
    height: 1,
    backgroundColor: '#868686',
    position: 'absolute',
    bottom: -7,
    left: '30.5%',
  },

  rightLine:{
    width: 65,
    height: 1,
    backgroundColor: '#868686',
    position: 'absolute',
    bottom: -7,
    right: '30.5%',
  },

  circle:{
    height: 12,
    width: 12,
    borderWidth: 1,
    borderColor: '#868686',
    position: 'absolute',
    borderRadius: 6,
    bottom: -12,
  },

  companyIcon: {
    position: "absolute",
    left: "40%",
  },

  iconButton:{
    position: 'absolute',
    right: 10,
    top: 3,
  },

  checkoutTitle:{
    fontSize: 22,
    fontFamily: 'serif',
    letterSpacing: 3,
  },

  product: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    position: "relative",
    marginLeft: 10,
  },

  removeButton: {
    borderWidth: 2,
    borderColor: "rgb(212, 3, 3)",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 140,
    bottom: 20,
  },

  infoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 5,
    backgroundColor: 'white'
  },

  productName: {
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "serif",
    letterSpacing: 1,
  },

  productInfo: {
    color: "#868686",
    fontSize: 13,
    fontFamily: "serif",
  },

  productPrice: {
    fontSize: 18,
    fontFamily: "serif",
    fontWeight: "500",
    color: "rgb(221, 80, 28)",
  },

  totalContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  estTotal:{
    fontSize: 16,
    fontFamily: 'serif',
    letterSpacing: 2,
    backgroundColor: 'white',
  },

  total:{
    fontFamily: 'serif',
    fontSize: 18,
    color: 'rgb(221, 80, 28)'
  },

  checkoutContainer:{
    backgroundColor: 'black',
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },

  checkoutText:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'serif',
    marginLeft: 20,
  }
  
});

export default CartScreen;