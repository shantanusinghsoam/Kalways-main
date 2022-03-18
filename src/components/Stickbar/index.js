import React from 'react';
import { SticNav, NavLink, Bars, NavMenu, Numbers } from './StickbarElements';
import { AiTwotonePhone } from 'react-icons/ai';
const Stickbar = () => {
  return (
    <>
      <SticNav>
        <Numbers>
          <AiTwotonePhone style={{ color: '#00e700', paddingTop: '2px' }} />
          <div
            style={{ color: '#00e700', paddingTop: '2px' }}
            className="text-sm items-center pt-2"
          >
            1-800-502-7000
          </div>
        </Numbers>

        <NavMenu>
          {/* <NavLink to="/" activeStyle></NavLink> */}

          {/* <NavLink to="/" activeStyle>
            Track Your Shipment
          </NavLink> */}
          {/* <NavLink to="/Abut" activeStyle>
            <a href="/About">About Us</a>
          </NavLink> */}

          <NavLink to="/Abut" activeStyle>
            <a href="/About">ABOUT US</a>
          </NavLink>

          {/* <NavLink to="/WorkAtKalway" activeStyle>
            <a href="/WorkAtKalway">Work at KALWAY</a>
          </NavLink> */}
          <NavLink to="/Ecommerce" activeStyle>
            <a href="/Ecommerce">E-COMMERCE</a>
          </NavLink>

          <NavLink to="/KalPower" activeStyle>
            <a href="/KalPower">KALPOWER</a>
          </NavLink>
          <NavLink to="/Careers" activeStyle>
            <a href="/Careers">CAREERS</a>
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            <a href="/Contact">CONTACT US</a>
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
