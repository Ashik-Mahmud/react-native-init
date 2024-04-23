import {
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import useGetMealCategories from "../../hooks/useGetMealCategories";
import { SafeAreaView } from "react-native-safe-area-context";
import MealsByCategory from "../../components/MealsByCategory";

const Categories = () => {
  const { mealCategories } = useGetMealCategories("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState("");

  const handlePressedCategory = (e) => {
    setCategoryName(e.strCategory);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="">
      {/* show initially 5 items and added load more function for flat list */}
      <FlatList
        data={mealCategories}
        className="px-3"
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => (
          <Pressable
            className="p-4 border-b border-gray-200"
            onPress={() => handlePressedCategory(item)}
          >
            <Image
              source={{ uri: item.strCategoryThumb }}
              className="w-full h-40"
              resizeMethod="auto"
              resizeMode="contain"
            />
            <Text className="font-bold text-lg">{item.strCategory}</Text>
            <Text className="text-gray-500">{item.strCategoryDescription}</Text>
          </Pressable>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log("end reached");
        }}

        // added scroll view for flat list
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {/* added scroll view for modal */}
        <MealsByCategory
          setModalVisible={setModalVisible}
          categoryName={categoryName}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
