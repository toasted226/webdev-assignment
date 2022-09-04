import "./Games.css";
import { SaleItem, create_UUID } from "../interfaces/SaleItem";
import GameItem from "../components/GameItem";
import HFW from "../assets/games/hfw.png";
import Forza from "../assets/games/forzahorizon4.png";
import GTAV from "../assets/games/gtav.png";
import Minecraft from "../assets/games/minecraft.png";
import GodOfWar from "../assets/games/godofwar.png";
import DyingLight from "../assets/games/dyinglight2.png";
import EldenRing from "../assets/games/eldenring.png";
import GhostOfTsushima from "../assets/games/ghostoftsushima.png";
import ACValhalla from "../assets/games/acvalhalla.png";
import Spiderman from "../assets/games/spiderman.png";

const games: SaleItem[] = [
    {
        key: create_UUID(),
        image: HFW,
        name: "Horizon Forbidden West",
        stat1: "PS4",
        stat2: "Action",
        price: 1255
    },
    {
        key: create_UUID(),
        image: Forza,
        name: "Forza Horizon 4",
        stat1: "Xbox One",
        stat2: "Sports",
        price: 699
    },
    {
        key: create_UUID(),
        image: GTAV,
        name: "Grand Theft Auto V",
        stat1: "PS5",
        stat2: "Action",
        price: 705
    },
    {
        key: create_UUID(),
        image: Minecraft,
        name: "Minecraft Bedrock",
        stat1: "PS4",
        stat2: "Adventure",
        price: 549
    },
    {
        key: create_UUID(),
        image: GodOfWar,
        name: "God of War Ragnarök",
        stat1: "PS4",
        stat2: "Adventure",
        price: 1085
    },
    {
        key: create_UUID(),
        image: DyingLight,
        name: "Dying Light 2: Stay Human",
        stat1: "PS5",
        stat2: "Survival/Horror",
        price: 1000
    },
    {
        key: create_UUID(),
        image: EldenRing,
        name: "Elden Ring",
        stat1: "PS4",
        stat2: "Role-Playing Games",
        price: 1400
    },
    {
        key: create_UUID(),
        image: GhostOfTsushima,
        name: "Ghost of Tsushima",
        stat1: "PS4",
        stat2: "Action",
        price: 799
    },
    {
        key: create_UUID(),
        image: ACValhalla,
        name: "Assassin's Creed Valhalla",
        stat1: "Xbox One",
        stat2: "Action",
        price: 1299
    },
    {
        key: create_UUID(),
        image: Spiderman,
        name: "Marvel's Spider-Man",
        stat1: "PS4",
        stat2: "Action",
        price: 695
    }
];

export default function Games() {
    return (
        <div className="games">
            {games.map((item) => {
                return (
                    <GameItem
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
