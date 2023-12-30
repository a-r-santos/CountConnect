import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';

const Home = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRouteSelection = (itemValue) => {
    setSelectedOption(itemValue);

    if (itemValue === 'Alubijid') {
      navigation.navigate('Alubijid');
    } else if (itemValue === 'Laguindingan') {
      navigation.navigate('Laguindingan');
    } else if (itemValue === 'Libertad') {
      navigation.navigate('Libertad');
    } else if (itemValue === 'Tagoloan') {
      navigation.navigate('Tagoloan');
    } else if (itemValue === 'Villanueva') {
      navigation.navigate('Villanueva');
    } else {
      navigation.navigate('Home');
    }
  };
  // Reset selectedOption when navigating back
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelectedOption('');
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* Background Color */}
      <View style={styles.backgroundColor} />

      {/* Background Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.backgroundImage}
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Dropdown menu */}
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) => handleRouteSelection(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Choose A Bus Route" value="" style={styles.pickerItem1} enabled={false} />
            <Picker.Item label="Gaisano Mall - Alubijid" value="Alubijid" style={styles.pickerItem} />
            <Picker.Item label="Gaisano Mall - Laguindingan" value="Laguindingan" style={styles.pickerItem} />
            <Picker.Item label="Gaisano Mall - Libertad" value="Libertad" style={styles.pickerItem} />
            <Picker.Item label="Gaisano Mall - Tagoloan" value="Tagoloan" style={styles.pickerItem} />
            <Picker.Item label="Gaisano Mall - Villanueva" value="Villanueva" style={styles.pickerItem} />
          </Picker>



        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor: {
    position: 'absolute',
    backgroundColor: '#D5B690',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    marginTop: 100,
    position: 'relative',
    width: '80%',
    height: '40%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 7,
    marginBottom: 200,
  },
  dropdown: {
    width: 300,
    color: 'white',
  },
  dropdownItem: {
    color: 'black', // Change this to the color you prefer
    backgroundColor: 'white',
  },
  pickerItem: {
    color: 'black', // Change this to the color you prefer
    fontSize: 16, // Customize the font size
  },
  pickerItem1: {
    color: 'black', // Change this to the color you prefer
    fontSize: 20, // Customize the font size
    fontWeight: 'bold'
  },


});

export default Home;
