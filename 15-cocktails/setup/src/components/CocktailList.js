import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { coctails, loading } = useGlobalContext();
  console.log(coctails);
  if (loading) {
    return <Loading />;
  }
  if (coctails.length < 1) {
    return (
      <h2 className="section-title">
        no coctails matched your search criteria
      </h2>
    );
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;
