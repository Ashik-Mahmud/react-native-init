import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const useGetMeals = (props: Props) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchMeals = async (query) => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query || ""}`
      );
      const data = await response.data;
      setMeals(data.meals);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals(searchQuery);
  }, [searchQuery]);

  return { meals, loading, error, setSearchQuery, searchQuery };
};

export default useGetMeals;
