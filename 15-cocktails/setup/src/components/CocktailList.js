import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { coctails, loading } = useGlobalContext();

  /* ako je loading true */
  if (loading) {
    return <Loading />;
  }
  /* ako nema coctails */
  if (coctails.length < 1) {
    return (
      <h2 className="section-title">
        no coctails matched your search criteria
      </h2>
    );
  }
  /* ako ima coctails u pretragi */
  return (
    <section className="section">
      <h2 className="section-title">coctails</h2>
      <div className="cocktails-center">
        {coctails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
