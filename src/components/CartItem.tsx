import "./CartItem.css";
import { SaleItem } from "../interfaces/SaleItem";

export default function CartItem(item: SaleItem) {
    return (
        <div className="cart-item">
            <div className="image">
                <img src={item.image}/>
            </div>
            <div className="details">
                <h3>{item.name}</h3>
                <h4>R{item.price}</h4>
            </div>
        </div>
    );
}
