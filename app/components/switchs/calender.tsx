import { Ionicons } from '@expo/vector-icons'; // or use any other icon set
import React from 'react';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = () => {
  const currentDate = new Date();

  const minDate = new Date(currentDate);
  minDate.setMonth(currentDate.getMonth() - 24);

  const maxDate = new Date(currentDate);
  maxDate.setMonth(currentDate.getMonth() + 24);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  return (
    <Calendar
      current={formatDate(currentDate)}
      minDate={formatDate(minDate)}
      maxDate={formatDate(maxDate)}
      enableSwipeMonths={true}
      hideArrows={false} // Show arrows
      onMonthChange={(month) => {
        console.log('Month changed:', month);
      }}
      renderArrow={(direction) =>
        direction === 'left' ? (
          <Ionicons name="chevron-back" size={24} color="black" />
        ) : (
          <Ionicons name="chevron-forward" size={24} color="black" />
        )
      }
      theme={{
        backgroundColor: '#ffffff',
        
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: '#000000',
        monthTextColor: '#00adf5',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}
      markingType={'multi-dot'}
      markedDates={{
        [formatDate(currentDate)]: {
          selected: true,
          marked: true,
          selectedColor: '#00adf5'
        }
      }}
    />
  );
};

export default CustomCalendar;