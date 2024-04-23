import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const useSingleMealByCategory = (props: Props) => {
  const [singleMeal, setSingleMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchSingleMeal = async (query) => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query || ""}`
      );
      const data = await response.data;
      setSingleMeal(data?.meals);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleMeal(searchQuery);
  }, [searchQuery]);

  return { singleMeal, loading, error, setSearchQuery, searchQuery };
};

export default useSingleMealByCategory;
