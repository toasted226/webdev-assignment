import { useState } from "react";
import "./ComputerItem.css";
import { AddItemToCart } from "../pages/Checkout";
import { SaleItem } from "../interfaces/SaleItem";

export default function ComputerItem(item: SaleItem) {
    const [isEnabled, setIsEnabled] = useState(true);
    return (
        <div className="item">
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p>{item.stat1}</p>
            <p>{item.stat2}</p>
            <h4>R{item.price}</h4>
            <button disabled={!isEnabled} onClick={() => {
                AddItemToCart(item);
                setIsEnabled((enabled) => enabled = false);
            }}>Add To Cart</button>
        </div>
    );
}
