import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';


const App = () => {
  return(
    <View>
      <View style={{width: 80, height: 80, backgroundColor:  'skyblue'} } />
      <Text>Nana</Text>
      <Suryana />
      <Text>Doddy</Text>
      <Text>Harry</Text>
      <Text>Rizwan</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}></TextInput>
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
      style={{width:100, height:100}}
    />
  );
};

export default App;