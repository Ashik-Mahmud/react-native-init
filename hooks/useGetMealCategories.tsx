import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const useGetMealCategories = (props: Props) => {
  const [mealCategories, setMealCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchMealsCategories = async (query) => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data = await response.data;
      setMealCategories(data?.categories);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealsCategories(searchQuery);
  }, [searchQuery]);

  return { mealCategories, loading, error, setSearchQuery, searchQuery };
};

export default useGetMealCategories;
