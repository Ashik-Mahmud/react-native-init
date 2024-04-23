import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import useSingleMealByCategory from "../hooks/useSingleMealByCategory";
import MealCard from "./MealCard";
const MealsByCategory = ({ setModalVisible, categoryName }) => {
  const { singleMeal, isLoading, setSearchQuery } =
    useSingleMealByCategory(categoryName);

  useEffect(() => {
    setSearchQuery(categoryName);
  }, [categoryName]);

  if (isLoading) return;

  return (
    <View className="bg-white flex-1 ">
      {/* added pressable for back button */}
      <Pressable
        className="p-4 border-b border-gray-200"
        onPress={() => setModalVisible(false)}
      >
        <Text className="font-bold text-lg">{categoryName}</Text>
      </Pressable>

      <View>
        {/* added scroll view for single meal */}
        <ScrollView className="p-5">
          <View className="flex flex-row items-center justify-center flex-wrap gap-4">
            {singleMeal?.map((meal) => (
              <MealCard key={meal.idMeal} {...meal} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MealsByCategory;
