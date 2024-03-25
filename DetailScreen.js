import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Button } from 'react-native';
import hostPicture from './host.png';
import message from './message.png';
import call from './call.png';
import caricon from './caricon.png';
import locationicon from './locationicon.png';

const windowWidth = Dimensions.get('window').width;

export default function DetailScreen({ route, navigation }) {
    const { station } = route.params;

    const handleBookButtonPress = () => {
        console.log('Book button pressed');
    };

    return (
        <ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 10 }}>
                <Image source={station.image} style={{ width: windowWidth, height: 300, borderRadius: 10, marginBottom: 2 }} />
                <View style={{ backgroundColor: 'white', width: windowWidth - 5, paddingHorizontal: 10, paddingVertical: 15, borderRadius: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', maxWidth: windowWidth - 120 }}>{station.stationName}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', maxWidth: windowWidth - 180 }}>
                            {station.availability === 'Available' && (
                                <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: 'green', marginRight: 5 }} />
                            )}
                            <Text style={{ fontWeight: 'bold', maxWidth: windowWidth - 200 }}>{station.availability}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <Image source={locationicon} style={{ width: 20, height: 23, marginRight: 5 }} />
    <Text>{station.distance}</Text>
    <Image source={caricon} style={{ width: 20, height: 20, marginRight: 5,marginLeft:30 }} />
    <Text>10 mins</Text> 
    <Text style={{ marginLeft: 150,marginBottom:10 }}>Price :<Text style={{fontWeight:'bold',fontSize:20}}>{station.pricePerHour} </Text> </Text>
    
   
   
    
</View>

                    <Text style={{ marginBottom: 10 }}>Charger Type:<Text style={{fontWeight:'bold'}}> CCS1 </Text></Text>

                    <TouchableOpacity
                        onPress={() => console.log('View Direction button pressed')}
                        style={{
                            backgroundColor: 'white',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 5,
                            width: windowWidth - 40,
                            marginVertical: 10,
                            borderWidth: 1,
                            borderColor: 'black'
                        }}
                    >
                        <Text style={{ color: 'black' }}>View Direction</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>About the Station</Text>
                    <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        .</Text>


                    <View style={{ backgroundColor: '#F4F4F4', paddingHorizontal: 10, paddingVertical: 15, borderRadius: 10, width: 420, marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Open Timing</Text>
                        <Text style={{ marginBottom: 10 }}>Monday              08 : 30 AM - 01 : 30 PM</Text>

                        <Text style={{ marginBottom: 10, marginLeft: 55 }}>             04 : 30 AM - 09 : 30 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Tuesday             09 : 30 AM - 06 : 30 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Wednesday        11 : 30 AM - 08 : 30 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Thursday           08 : 00 AM - 09 : 30 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Friday                08 : 30 AM - 09 : 30 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Saturday           08 : 30 AM - 08 : 00 PM</Text>
                        <Text style={{ marginBottom: 10 }}>Sunday              08 : 30 AM - 07 : 30 PM</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Host Information</Text></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 1, backgroundColor: '#F4F4F4',width:420,height:70,borderRadius:10 }}>
                        <Image source={hostPicture} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>John Doe</Text>
                        <TouchableOpacity onPress={() => console.log('Message icon pressed')}>
                            <Image source={message} style={{ width: 30, height: 30, marginLeft: 183 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Phone call icon pressed')}>
                            <Image source={call} style={{ width: 30, height: 30, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#F4F4F4',width:420,height:70,borderRadius:10 }}>
                        <Text style={{margin:5}}>Contact Number: 123-456-7890</Text>
                        <Text> Email Address: john.doe@example.com</Text>
                        </View>
                        <TouchableOpacity
                        onPress={() => console.log('View Direction button pressed')}
                        style={{
                            backgroundColor: 'blue',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 5,
                            width: windowWidth - 100,
                            marginVertical: 10,
                            borderWidth: 1,
                            borderRadius:10,
                            marginLeft:28
                            
                        }}
                    >
                        <Text style={{ color: 'white',fontSize:15,fontWeight: 'bold' }}>Book Now </Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
           
        </ScrollView>
    );
}
