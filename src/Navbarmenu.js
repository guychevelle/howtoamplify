import React,{useState} from 'react';
import './navbarmenu.css';
import { Auth } from 'aws-amplify';
import {NavLink, Link, useLocation} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from './HowToAmplifyLogo.png';

const Navbarmenu = (props) => {

    if (props.isLoggedIn)
      console.log('navbar says logged in');
    else
      console.log('navbar says NOT logged in');

    const location = useLocation();
    console.log('location', location);

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    const logOut = () => {
      Auth.signOut();
      toggleClass();
    }

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    //  craft user login menu link based on login status
    const useritem = props.userData != null
          ?
            <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > 
              <Link to="#">
                {props.userData.username}  <FiChevronDown />
              </Link>
              <ul className={boxClassSubMenu.join(' ')} >
                <li> <NavLink onClick={logOut} className='is-active'  
                              to={location.pathname.includes('profile') ?
                                  '/login' :
                                  location.pathname}> Log Out </NavLink> </li>
                <li><NavLink onClick={toggleClass} className='is-active' to={`/profile`}> User Profile </NavLink> </li>
              </ul>
            </li>
          :
            <li className="menu-item " ><NavLink onClick={toggleClass} className='is-active' to={'/login'}> Login </NavLink> </li>


    return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink className='is-active' to="/">
              <img src={logo} alt="logo" /> 
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav " >

              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? <> 
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                </> : <> 
                  <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
               </>}

               <ul className={boxClass.join(' ')}>
                 <li  className="menu-item" >
                   <NavLink className='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                 </li>
                 <li className="menu-item " ><NavLink onClick={toggleClass} className='is-active' to={`/about`}> About </NavLink> </li>
                 { props.userData && props.userData.username == 'david' ?
                   <li className="menu-item " ><NavLink onClick={toggleClass} className='is-active' to={`/load`}> Load </NavLink> </li>
                   : ""
                 }
                 <li className="menu-item " ><a href="https://runondemandgallery.com"> Back to Gallery </a> </li>
                 {useritem}
               </ul>
             </nav>     
          </div>   
        </div>
      </div>
    </header>
    )
}

export default Navbarmenu

