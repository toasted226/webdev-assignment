import './Home.css'
import ComputerImage from '../assets/computer.png';
import GamingImage from '../assets/gaming.png';
import { Link } from 'react-router-dom';

const linkStyle = {
  fontSize: "18",
  display: "flex",
  justifyContent: "space-evenly",
  textDecoration: "none",
  alignItems: "center",
  color: "#282D35",
  fontWeight: "bold"
}

function Home() {
  return (
    <div className="home">
      <div className="info">
        <h1>The best place to get your gaming on</h1>
        <p>We have all sorts of computers and games to meet your gaming needs - 
          the best in the market. Whether it's the best hardware 
          or the latest games, we've got what you need.</p>
      </div>
      <div className="buttons">
        <div className="button-group">
          <img src={ComputerImage}/>
          <div className="image-button">
            <Link style={linkStyle} to="/computers">Browse Computers</Link>
          </div>
        </div>
        <div className="button-group">
          <img src={GamingImage}/>
          <div className="image-button">
            <Link style={linkStyle} to="/games">Browse Games</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;