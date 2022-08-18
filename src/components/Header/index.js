import { Link } from "react-scroll";
import "./index.css";

const Header = () => {
  return (
    <div className="nav">
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="aboutSection" >About</Link>
        </li>
        <li><Link to="roadmap">Roadmap</Link></li>
        <li><Link to="teamId">Team</Link></li>
        <li><Link to="faqId">FAQ</Link></li>
      </ul>
      <ul>
        <li>
          <a href="#"><img src="assets/photo/Vector (1).png" /></a>
        </li>
        <li>
          <a href="#"><img src="assets/photo/twitter.png" /></a>
        </li>
        <li>
          <a href="#"><img src="assets/photo/instagram.png" /></a>
        </li>
      </ul>
      <button>
        Connect Wallet
      </button>
    </div>
  );
}
export default Header;