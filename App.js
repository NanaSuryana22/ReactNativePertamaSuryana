import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import ReactNativeStyleComponent from './ReactNativeStyleComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <ReactNativeStyleComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;