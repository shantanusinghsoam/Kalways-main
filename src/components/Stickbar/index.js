import React from 'react';
import { SticNav, NavLink, Bars, NavMenu } from './StickbarElements';

const Stickbar = () => {
  return (
    <>
      <SticNav>
        <NavMenu>
          {/* <NavLink to="/" activeStyle></NavLink> */}

          {/* <NavLink to="/" activeStyle>
            Track Your Shipment
          </NavLink> */}
          {/* <NavLink to="/Abut" activeStyle>
            <a href="/About">About Us</a>
          </NavLink> */}

          <NavLink to="/Abut" activeStyle>
            <a href="/About">About Us</a>
          </NavLink>

          {/* <NavLink to="/WorkAtKalway" activeStyle>
            <a href="/WorkAtKalway">Work at KALWAY</a>
          </NavLink> */}
          <NavLink to="/Careers" activeStyle>
            <a href="/Careers">Carrers</a>
          </NavLink>
          <NavLink to="/Ecommerce" activeStyle>
            <a href="/Ecommerce">E-commerce</a>
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            <a href="/Contact">Contact Us</a>
          </NavLink>
          {/* <NavLink to="/" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/" activeStyle>
            Georgia
          </NavLink>
          <NavLink to="/" activeStyle>
            New Jersey
          </NavLink>
          <NavLink to="/" activeStyle>
            Canada
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
