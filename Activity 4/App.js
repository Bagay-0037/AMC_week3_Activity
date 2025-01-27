import React from 'react';
import {StyleSheet, Image, View,TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Flex = () => {
  const [text, onChangeText] = React.useState('NAME: ');
  const [age, onChangeText2] = React.useState('AGE: ');
  const [address, onChangeText3] = React.useState('ADDRESS: ');
  const [school, onChangeText4] = React.useState('SCHOOL: ');
  const [course, onChangeText5] = React.useState('COURSE: ');
  const [email, onChangeText6] = React.useState('EMAIL: ');
  const [cNum, onChangeText7] = React.useState('CONTACT NO: ');

  const [value, onChangeText8] = React.useState('ABOUT ME:');

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <View>
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText}
          value = {text}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText2}
          value = {age}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText3}
          value = {address}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText4}
          value = {school}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText5}
          value = {course}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText6}
          value = {email}
        />
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeText7}
          value = {cNum}
        />

        <TextInput
          editable
          multiline
          numberOfLines={10}
          maxLength={1000}
          onChangeText = {text => onChangeText8(text)}
          value={value}
          style={styles.textInput}
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
  },
  input: {
    height: 40,
    width:250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 20,
  },
});

export default Flex;