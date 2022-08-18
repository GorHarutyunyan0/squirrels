import "./index.css";

const Footer = () => (
  <>
    <footer className="footer">
        <img src="./assets/photo/mask.svg" alt="mask" />
        <h1>logo</h1>
        <div className="footer-right">
            <h2>join the community</h2>
            <div className="social">
                <img src="./assets/photo/discord.svg" alt="discord" />
                <img src="./assets/photo/twitter.svg" alt="twitter" />
                <img src="./assets/photo/instagram.svg" alt="instagram" />
            </div>
            <button>Join Discord</button>
        </div>
    </footer>
    <div className="copywrite">Copyright © 2022 Dabookie. All rights reserved.</div>
  </>
);

export default Footer;