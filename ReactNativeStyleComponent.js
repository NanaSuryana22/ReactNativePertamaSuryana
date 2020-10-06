import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import laptop from './image.jpeg';

const ReactNativeStyleComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Basic Stylish</Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
        <Image source={laptop} style={{width: 188, height: 165, borderRadius: 8}}></Image>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Laptop Core I5 2020</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: '#f2994a'}}>Rp. 25.000.000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
        <View style={{
          backgroundColor: '#6fcf97',
          paddingVertical: 6,
          marginTop: 20,
          borderRadius: 25 }}>
          <Text style={{fontSize: 14,
                        fontWeight: '400',
                        color: 'white',
                        textAlign: 'center'}}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
  }
}) 

export default ReactNativeStyleComponent;