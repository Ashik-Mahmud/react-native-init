import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";

const Profile = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View className="flex items-center justify-center flex-1">
      <Text className="text-2xl">Date Picker</Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <TextInput type="date" />
      {open && (
        <DateTimePicker
          value={date}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setOpen(Platform.OS === "ios");
            setDate(currentDate);
          }}
          display="default"
          mode="date"
        />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
