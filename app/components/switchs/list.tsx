import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const List = () => {
  // Sample data
  const data = [
    {
      id: '1',
      date: '24',
      day: 'Mon',
      time: '10:30 AM',
      text: 'Team Meeting',
    },
    {
      id: '2',
      date: '25',
      day: 'Tue',
      time: '02:15 PM',
      text: 'Doctor Appointment',
    },
    {
      id: '3',
      date: '26',
      day: 'Wed',
      time: '09:00 AM',
      text: 'Gym Session',
    },
    {
      id: '4',
      date: '27',
      day: 'Thu',
      time: '04:45 PM',
      text: 'Coffee with Sarah',
    },
  ];

  // Render each item
  const renderItem = ({ item }: { item: any }) => (

    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.dayText}>{item.day}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  leftContainer: {
    alignItems: 'flex-start',
    width: 100,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 16,
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  dayText: {
    fontSize: 16,
    color: '#777',
    marginVertical: 2,
  },
  timeText: {
    fontSize: 14,
    color: '#999',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'right',
  },
});

export default List;
