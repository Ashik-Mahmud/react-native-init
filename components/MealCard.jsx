import React from "react";
import { Image, Text, View } from "react-native";

const MealCard = (meal) => {
  return (
    <View
      key={meal.idMeal}
      className="w-44 bg-white border border-gray-50 rounded-lg p-2 flex flex-col items-center justify-center gap-0"
    >
      <Image
        source={{ uri: meal.strMealThumb }}
        resizeMode="cover"
        className="w-full h-28 rounded-lg"
      />
      <Text className="text-base mt-4 inline-block text-black">
        {meal.strMeal}
      </Text>
    </View>
  );
};

export default MealCard;
