import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cart from './keranjang.png';

const PositionReactNative = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

export default PositionReactNative;

const styles = StyleSheet.create({
  iconCart: {
    width: 50,
    height: 50,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    backgroundColor: '#6fce97',
    color: 'white',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    marginBottom: 30,
  },
})
