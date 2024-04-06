import React, { useEffect, useState } from "react";
import CartGrid from "../components/CartGrid";
import FilterBar from "../components/FilterBar";
import { useQuerySneakerQuery } from "../redux/services/foodApi";
import Box from "@mui/material/Box";

const Products = () => {
  const { data } = useQuerySneakerQuery();
  const [foods, setFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (data) {
      setFoods(data);
    }
  }, [data]);

  const filteredFoods =
    activeCategory === ""
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <Box pb={3}>
      <FilterBar
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <CartGrid foods={filteredFoods} />
    </Box>
  );
};

export default Products;
