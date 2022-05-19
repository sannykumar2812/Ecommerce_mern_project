import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Sanny Kumar</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/profile.php?id=100008259618024">Facebook</a>
        <a href="https://twitter.com/sunny_singh__28">Twitter</a>
        <a href="https://www.linkedin.com/in/sanny-kumar-3a4162205/">Linkedin</a>
        <a href="https://www.instagram.com/sunny_singh__28/">Instagram</a>

      </div>
    </footer>
  );
};

export default Footer;
