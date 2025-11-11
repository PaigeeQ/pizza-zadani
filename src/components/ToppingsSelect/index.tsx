import type {ITopping} from "../../models/Topping";
import Topping from "../Topping";
import React, { useState } from 'react';
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [items, setItems] = useState<ITopping[]>(toppings);

  const toggle = (name: string, next: boolean) => {
    setItems(ts => ts.map(t => t.name === name ? { ...t, selected: next } : t));
  };

  const selectedCount = items.filter(t => t.selected).length;
  const totalPrice = items
    .filter(t => t.selected)
    .reduce((sum, t) => sum + t.price, 0);

  
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {selectedCount}, total price: {totalPrice} Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping topping={topping} key={topping.name}  onToggle={(next) => toggle(topping.name, next)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
