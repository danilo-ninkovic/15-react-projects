import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
<<<<<<< HEAD

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
=======

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
>>>>>>> de7d6085ef53074777083676b1d7de5150a0fba5
  return (
    <main>
      <section className="menu section">
        <div className="title">
<<<<<<< HEAD
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
=======
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
>>>>>>> de7d6085ef53074777083676b1d7de5150a0fba5
      </section>
    </main>
  );
}

export default App;
