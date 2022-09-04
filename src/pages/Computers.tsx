import ComputerItem from "../components/ComputerItem";
import "./Computers.css";
import { SaleItem, create_UUID } from "../interfaces/SaleItem";
import Comp1 from "../assets/computers/RCT.png";
import Comp2 from "../assets/computers/Helios.png";
import Comp3 from "../assets/computers/Grinder.png";
import Comp4 from "../assets/computers/AsusTUF.png";
import Comp5 from "../assets/computers/MSImasterclass.png";
import Comp6 from "../assets/computers/RyzeAgainCrusher.png";
import Comp7 from "../assets/computers/CustomBeast.png";

const comps: SaleItem[] = [
    {
        key: create_UUID(),
        image: Comp1,
        name: "RCT",
        stat1: "Intel Core i5-10400F",
        stat2: "NVIDIA GeForce GTX 1650",
        price: 14999
    },
    {
        key: create_UUID(),
        image: Comp2,
        name: "Helios",
        stat1: "Intel Core i9-12900KF",
        stat2: "NVIDIA GeForce RTX 3080",
        price: 42000
    },
    {
        key: create_UUID(),
        image: Comp3,
        name: "Grinder",
        stat1: "Intel Core i7-4790",
        stat2: "Radeon RX580 8GB",
        price: 11500
    },
    {
        key: create_UUID(),
        image: Comp4,
        name: "Asus TUF",
        stat1: "Intel Core i5-12400",
        stat2: "NVIDIA RTX3060 12GB",
        price: 33650
    },
    {
        key: create_UUID(),
        image: Comp5,
        name: "MSI Masterclass",
        stat1: "Intel Core i9-11900KF",
        stat2: "NVIDIA RTX3090 24GB",
        price: 119000
    },
    {
        key: create_UUID(),
        image: Comp6,
        name: "Ryze Again",
        stat1: "AMD Ryzen 5 Pro 3350G",
        stat2: "NVIDIA GTX1660 6GB",
        price: 25680
    },
    {
        key: create_UUID(),
        image: Comp7,
        name: "Custom Beast",
        stat1: "Intel Core i5-12600K",
        stat2: "NVIDIA RTX3080 10GB",
        price: 52500
    }
];

export default function Computers() {
    return (
        <div className="computers">
            {comps.map((item) => {
                return (
                    <ComputerItem 
                        key={item.key}
                        image={item.image} 
                        name={item.name} 
                        stat1={item.stat1} 
                        stat2={item.stat2}
                        price={item.price}
                    />
                )
            })}
        </div>
    );
}
