import React, { useState } from 'react';
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCat] = useState("All")
  const list = items.filter((item) => {if (selectedCategory === "All"){return true;} else {return item.category === selectedCategory}});

  function handleChange(event){
    setCat(event.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {list.map((list) => (<Item key={list.id} name={list.name} category={list.category} />))}
      </ul>
    </div>
  );
}

export default ShoppingList;
