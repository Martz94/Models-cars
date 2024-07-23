import { IconFacebook, IconInstagram, IconTwitter, IconYoutube } from "../iconos/index";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className="footer_top-sub">
          <div>
            <h3>Call and take more info:</h3>
            <h3>+00 544-213-615</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="footer_top-sub footer-menu" >
          <h3>Menu</h3>
          <ul>
            <li>
              <a className="button_info-a" href="https://gifts-workdo.myshopify.com/search">Search</a>
            </li>
            <li>
              <a className="button_info-a" href="https://gifts-workdo.myshopify.com/pages/privacy-policy">Privacy policy</a>
            </li>
            <li>
              <a className="button_info-a" href="https://gifts-workdo.myshopify.com/pages/shipping">Shipping policy</a>
            </li>
            <li>
              <a className="button_info-a" href="https://gifts-workdo.myshopify.com/pages/terms-conditions">terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer_top-sub">
          <h3>Navigation</h3>
          <div>
            <ul>
              <li>
                <a className="button_info-a" href="http://localhost:5173/about-us">About us</a>
              </li>
              <li>
                <a className="button_info-a" href="#">Article Page</a>
              </li>
              <li>
                <a className="button_info-a" href="#">Collection list</a>
              </li>
              <li>
                <a className="button_info-a" href="#">Blog Page</a>
              </li>
              <li>
                <a className="button_info-a" href="http://localhost:5173/faqs">Fags</a>
              </li>
              <li>
                <a className="button_info-a" href="#">Contact us</a>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="footer_top-sub">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="footer_button">
        <div className="footer_button-sub">
          <a className="button_info-a" href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore">
            © 2023, Gifts Workdo, Powered by Shopify</a>
        </div>
        <div className="footer_button-sub">
        <div className="footer_redes">
          <div className="button_redes-1">
            <a href="https://twitter.com/">
              <IconTwitter/>
            </a>
          </div>
          <div className="button_redes-1">
            <a href="https://www.facebook.com/">
              <IconFacebook/>
            </a>
          </div>
          <div className="button_redes-1">
            <a href="https://www.instagram.com/">
              <IconInstagram/>
            </a>
          </div>
          <div className="button_redes-1">
            <a href="https://www.youtube.com/">
              <IconYoutube/>
            </a>
          </div>
        </div>
        </div>
        <div className="Footer_button-sub">
          <div className="button-info">
          <a className="button_info-a" href="https://gifts-workdo.myshopify.com/pages/privacy-policy">Privacy & Policy</a>
          <a className="button_info-a" href="https://gifts-workdo.myshopify.com/pages/shipping">Shipping</a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}


export default Footer