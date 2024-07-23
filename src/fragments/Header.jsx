import { NavLink } from "react-router-dom";
import { IconBox, IconSearch, IconHeart, IconUser, IconCart } from "../iconos/index";


const Header = () => {
  return (
    <div className="header">
      <nav className="header_nav">
          <div>
              <h2>Gifts.</h2> 
          </div>
          <div className="header_nav-2">
          <ul className="header_list">
            <a className="header_list" href="#">
            <IconBox/>
            Gift Home 
            </a>
            <li><NavLink to="/faqs">faqs</NavLink></li>
            <li><NavLink to="/policy">policy</NavLink></li>
            <li><NavLink to="/shipping">shipping</NavLink></li>
            <li><NavLink to="/about-us">about-us</NavLink></li>
            <li><NavLink to="/cars">cars</NavLink></li>
          </ul>
          <div className="header_list header_list-2">
            <a href="#"><IconSearch/>Search</a>
            <a href="#"><IconHeart/>Wishlist</a>
            <a href="#"><IconUser/>My profile</a>
            <div>
              <a className="button_1 button_1-b" href="#"><IconCart/>Cart</a>
            </div>
          </div>
          </div>
          
      </nav>
    </div>
   
  )
}

export default Header
