import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useGetMeals from "../../hooks/useGetMeals";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { meals, setSearchQuery } = useGetMeals();

  const handleOnChange = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (searchText === "") {
      return;
    }

    const timeout = setTimeout(() => {
      setSearchQuery(searchText);
    }, 10);
    return () => clearTimeout(timeout);
  }, [searchText]);
  return (
    <SafeAreaView>
      <ScrollView className="h-full ">
        <View className="flex-1 items-center justify-center">
          <View className="relative">
            <View className=" w-screen mb-16 bg-white py-6 sticky top-0">
              <Text className="text-center text-2xl">Find Your Best Meal</Text>
              <TextInput
                className="w-[90vw] mx-auto overflow-hidden mt-4  bg-slate-100 rounded-lg p-4"
                placeholder="Search Your Favorite meal..."
                value={searchText}
                onChangeText={handleOnChange}
              />
            </View>
            <View className="flex flex-row items-center justify-center flex-wrap gap-4">
              {meals?.map((meal) => (
                <View
                  key={meal.idMeal}
                  className="w-44 bg-white shadow-md rounded-lg p-2 flex flex-col items-center justify-center gap-0"
                >
                  <Image
                    source={{ uri: meal.strMealThumb }}
                    resizeMode="cover"
                    className="w-full h-28 rounded-lg"
                  />
                  <Text className="text-lg mt-4 inline-block text-black">
                    {meal.strMeal}
                  </Text>
                  <Text className="text-xs text-black/60">
                    {meal.strCategory}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
