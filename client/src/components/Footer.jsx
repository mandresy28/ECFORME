import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import "./Footer.scss";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> 
        <TwitterIcon /> 
         <Link to='/'
              target='_blank'
              aria-label='Facebook'><FacebookIcon /> </Link>
        <LinkedInIcon />
      </div>
      <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <h3> <PhoneIcon/> 034 66 330 90</h3>
            <h3> <MailIcon/> information:dina_ecforme@outlook.com/inscription:ecforme_rfs@telma.net</h3>
          </div>
      <p> &copy; 2019 Ecforme</p>
    </div>
  );
}

export default Footer;
