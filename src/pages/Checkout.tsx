import { useState } from "react";
import CartItem from "../components/CartItem";
import Confirmation from "../components/Confirmation";
import { SaleItem } from "../interfaces/SaleItem";
import "./Checkout.css";

let cartItems: SaleItem[] = [];
let email = "";

export function AddItemToCart(item: SaleItem) {
    cartItems.push(item);
}

export default function Checkout() {
    const [enabled, setEnabled] = useState(false);
    return (
        <>
        <div className="checkout">
            {cartItems.map((item) => {
                return (
                    <CartItem 
                        key={item.key}
                        image={item.image}
                        name={item.name}
                        stat1={item.stat1}
                        stat2={item.stat2}
                        price={item.price}
                    />
                );
            })}
        </div>
        <div className="purchase">
            <div className="price">
                <div></div>
                <h3>Total:</h3>
                <h4>R{GetTotal()}</h4>
                <div></div>
            </div>
            <div className="order">
                <input id="email" placeholder="Email"></input>
                <button onClick={() => {
                    const input: HTMLInputElement = document.querySelector("#email")!;
                    email = input.value;

                    if(email === "") {
                        setTimeout(() => {setEnabled((conf) => conf = false)}, 2000);
                    }

                    setEnabled((conf) => conf = true);
                }}>Reserve Order</button>
            </div>
            <Confirmation enabled={enabled} email={email} />
        </div>
        </>
    );
}

const GetTotal = (): number => {
    let price = 0;

    cartItems.forEach((item) => {
        price += item.price;
    });

    return price;
}
