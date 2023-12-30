import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Bus105 = () => {
    const navigation = useNavigation();

    const handleBackButtonClick = () => {
        navigation.navigate('Home');
    };

    const handleLeftArrowClick = () => {
        navigation.navigate('Bus104');
    };


    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleBackButtonClick} style={styles.backButton}>
                    <Icon name="angle-double-left" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.title}>Destination: <Text style={styles.subtitle}>Alubijid</Text>{' '}
                </Text>
            </View>
            <View style={styles.circleContainer}>
                <TouchableOpacity onPress={handleLeftArrowClick}>
                    <Icon name="chevron-circle-left" size={40} style={styles.arrowIcon} />
                </TouchableOpacity>
                <View style={styles.circle1}>
                    <Text style={styles.busNumber}>Bus Number</Text>
                    <Text style={styles.number}>105</Text>
                </View>
            </View>
            <View style={styles.circle}>
                <Text style={styles.busCapacity}>Bus Capacity</Text>
                <Text style={styles.number}>26</Text>
            </View>
            <View style={styles.circle}>
                <Text style={styles.passengers}>Passengers</Text>
                <Text style={styles.number}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex',
        alignItems: 'center',
        backgroundColor: '#D5B690',
    },
    circleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowIcon: {
        color: 'white',
        margin: 10,
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    circle1: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 55
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontWeight: 'bold',
    },
    busNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    busCapacity: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    passengers: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    number: {
        fontSize: 60,
    },
    backButton: {
        marginRight: '80%',
        marginBottom: '5%',
        marginTop: '20%',
    }
});

export default Bus105;
