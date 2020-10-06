import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'skyblue'}} />
      <Text>Nana</Text>
      <Suryana />
      <Text>Doddy</Text>
      <Text>Harry</Text>
      <Text>Rizwan</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <GambarLagi />
    </View>
  );
};

const Suryana = () => {
  return <Text>Suryana mahasiswa STMIK</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Kelas Komponen</Text>;
  }
}

class GambarLagi extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://placeimg.com/100/100/nature'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 15}}>
          Gambar diatas adalah gambar dari kelas komponen
        </Text>
      </View>
    );
  }
}

export default SampleComponent;