import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [person, setPerson] = useState({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('Kazi')
    setPerson({name: 'Kazi', age: 25})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His Name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update state' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 20
  }
});
