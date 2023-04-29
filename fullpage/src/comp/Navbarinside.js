
import { Link, NavLink  } from "react-router-dom";
import './Navbarinside.css';
import PersonIcon from '@mui/icons-material/Person';

import MenuIcon from '@mui/icons-material/Menu';

import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbarinside = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "icon-bar") {
      x.className += " responsive";
    } else {
      x.className = "icon-bar";
    }
  }
  return (
  
    <div className="icon-bar" id="myTopnav">
    
      <a href='' className="leftsidenav">home</a>
      
      <a href="" className="leftsidenav" >available donors</a>
      <a href=""  className="leftsidenav" > donor center location</a>
      <a href=""  className="leftsidenav" ><NotificationsIcon/>private blood request</a>
    
    <a href="" className='icon3'><PersonIcon/></a> 
    <a href="javascript:void(0);" className="icon4" onClick={myFunction}>
      <MenuIcon  />
      </a>
  </div>

        );
      }
  

export default Navbarinside;

