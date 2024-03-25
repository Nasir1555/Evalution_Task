import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default function MapViewComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MapView"
                    component={MapViewScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ title:    '                     Details' }}
                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MapViewScreen({ navigation }) {
    const [selectedStation, setSelectedStation] = useState(null);

    const markers = [
        { id: 1, title: 'Marker 1', description: 'Description for Marker 1', coordinate: { latitude: 37.78825, longitude: -122.4324 }, stationName: '2102 Schuster Village Satterfieldshire', pricePerHour: '$5/hr', distance: '2 miles', availability: 'Available', image: require('./station1.jpg') },
        { id: 2, title: 'Marker 2', description: 'Description for Marker 2', coordinate: { latitude: 37.785, longitude: -122.435 }, stationName: 'Station 2', pricePerHour: '$6/hr', distance: '3 miles', availability: 'Unavailable', image: require('./station2.jpg') },
        { id: 3, title: 'Marker 3', description: 'Description for Marker 3', coordinate: { latitude: 37.782, longitude: -122.437 }, stationName: 'Station 3', pricePerHour: '$7/hr', distance: '4 miles', availability: 'Available', image: require('./station3.jpg') },
        { id: 4, title: 'Marker 4', description: 'Description for Marker 4', coordinate: { latitude: 37.780, longitude: -122.43 }, stationName: 'Station 4', pricePerHour: '$8/hr', distance: '5 miles', availability: 'Unavailable', image: require('./station4.jpg') },
        { id: 5, title: 'Marker 5', description: 'Description for Marker 5', coordinate: { latitude: 37.786, longitude: -122.432 }, stationName: 'Station 5', pricePerHour: '$9/hr', distance: '6 miles', availability: 'Available', image: require('./station5.jpg') }
    ];

    const handleMarkerPress = (station) => {
        setSelectedStation(station);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map(station => (
                    <Marker
                        key={station.id}
                        coordinate={station.coordinate}
                        title={station.title}
                        description={station.description}
                        onPress={() => handleMarkerPress(station)}
                        image={require('./charger_marker.png')} 
                    />
                ))}
            </MapView>
            {selectedStation && (
                <View style={styles.slideContainer}>
                    <ScrollView contentContainerStyle={styles.slideContent}>
                        <View style={styles.stationContainer}>
                            <Image source={selectedStation.image} style={styles.stationImage} />
                            <View style={styles.stationDetails}>
    <Text style={styles.slideText}>Station Name: {selectedStation.stationName}</Text>
    <Text style={styles.slideText}> {selectedStation.pricePerHour}</Text>
    <Text style={styles.slideText1}>Distance: <Text style={{ fontWeight: 'bold' }}>{selectedStation.distance}</Text></Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.availabilityDot, { backgroundColor: selectedStation.availability === 'Available' ? 'green' : 'transparent' }]} />
        <Text style={[styles.slideText, { marginTop:-20}]}> {selectedStation.availability}</Text>
    </View>
</View>

                        </View>
                       <View style={{height:50,width:450}}>
                            <Button
                                title="Book Now" color="blue"
                                onPress={() => navigation.navigate('Detail', { station: selectedStation })}
                            
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    slideContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    slideContent: {
        alignItems: 'flex-start',
    },
    slideText: {
    
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    slideText1: {
    
        fontSize: 16,
        marginHorizontal: 10,
        marginTop:10
        
    },
    stationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    stationImage: {
        width: 100,
        height: 110,
        marginRight: 10,
        borderRadius: 4,
    },
    availabilityDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
        marginBottom:5,
        marginTop:-20,
        marginLeft:220,
        
    },
    
    stationDetails: {
        flex: 1,
    },
});