// import React from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// // Abstracted map component
// const MapComponent = () => {
//   // Initial region (San Francisco)
//   const initialRegion = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   // Marker positions
//   const markers = [
//     {
//       id: 1,
//       title: 'Golden Gate Bridge',
//       description: 'Iconic suspension bridge',
//       coordinate: { latitude: 37.8199, longitude: -122.4783 },
//     },
//     {
//       id: 2,
//       title: "Fisherman's Wharf",
//       description: 'Popular tourist area',
//       coordinate: { latitude: 37.808, longitude: -122.4177 },
//     },
//   ];

//   // Show fallback for web
//   if (Platform.OS === 'web') {
//     return (
//       <View style={styles.webContainer}>
//         <Text style={styles.webText}>Map view is not supported on web.</Text>
//       </View>
//     );
//   }

//   // Dynamically require MapView & Marker to avoid web crash
//   // const MapView = require('react-native-maps').default;
//   // const { Marker } = require('react-native-maps');

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={initialRegion}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         showsCompass={true}
//         zoomEnabled={true}
//         scrollEnabled={true}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={marker.id}
//             coordinate={marker.coordinate}
//             title={marker.title}
//             description={marker.description}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
//   webContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//   },
//   webText: {
//     fontSize: 16,
//     color: '#6B7280',
//   },
// });

// export default MapComponent;
