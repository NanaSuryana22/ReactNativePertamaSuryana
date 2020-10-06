import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return ( <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View
            style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View
            style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View
            style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image source={{
                  uri: 'https://yt3.ggpht.com/a/AATXAJz_AYyqfeikVeNhqU6GEm5u4nG9GwuMreqjLjuL0w=s100-c-k-c0xffffffff-no-rj-mo'
                  }}
                    style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
                  />
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nana Suryana</Text>
                    <Text>100 ribu subscriber</Text>
                  </View>
              </View>
          </View>
    );
  }
}

export default MateriFlexBox;