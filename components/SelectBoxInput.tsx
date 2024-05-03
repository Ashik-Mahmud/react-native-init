import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const SelectBoxInput = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([]);
  const dropdownRef = useRef(null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json"
    )
      .then((response) => response.json())
      .then((json) => {
        const data = json;
        const newData = data.map((item) => ({
          label: item.name,
          value: item.name,
        }));

        /* Go through the newData array and add group for each letter of english*/
        const updatedNewData = newData.reduce((acc, item) => {
          const firstLetter = item.label[0].toUpperCase();
          if (!acc[firstLetter]) {
            acc[firstLetter] = [];
          }
          acc[firstLetter].push(item);
          return acc;
        }, {});
        const updatedData = Object.keys(updatedNewData).map((key) => ({
          label: key,
          value: key,
          countries: updatedNewData[key],
        }));
        /* get serialize array of object data */

        let serializeData = [];
        updatedData?.forEach((item) => {
          serializeData.push({
            label: item?.value,
            value: item.value,
            title: true,
          });
          item?.countries?.forEach((child) => {
            serializeData.push(child);
          });
        });

        setData(serializeData);
      });
  }, []);

  return (
    <View className="px-10 mt-5">
      <Dropdown
        ref={dropdownRef}
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          if (item.title) return;
          setValue(item.value);
          setIsFocus(false);
        }}
        containerStyle={{ borderRadius: 13, marginTop: 10, paddingTop: 5 }}
        keyboardAvoiding={true}
        flatListProps={{
          keyExtractor: (item) => item.value,
          showsVerticalScrollIndicator: false,
          persistentScrollbar: true,
        }}
        showsVerticalScrollIndicator
        onChangeText={(item) => {
          console.log(item, "showing text");
        }}
        onConfirmSelectItem={(item) => {
          if (item.title) return;
          setValue(item.value);
          dropdownRef.current.close();
        }}
        confirmSelectItem={true}
        renderItem={(item, index, selected) => {
          return item.title ? (
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                padding: 10,
                paddingLeft: 16,
              }}
            >
              {item.label}
            </Text>
          ) : (
            <Text style={{ fontSize: 16, marginLeft: 10, padding: 10 }}>
              {item.label}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default SelectBoxInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    width: "100%",
  },
  dropdown: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: 14,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },
});
