import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Navbarinside.css';
import {FaBars} from 'react-icons/fa';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbarinside = () => {
  return (
  
    <div className="icon-bar">
    <a className="active" href="#"><i className="fa fa-home" /></a> 
  
    <a href="#"><i className="fa fa-globe" /></a>
    <a href="#"><i className="fa fa-trash" /></a>
    <a href="#"> <NotificationsIcon/></a> 
    <a href=""><AccountBoxIcon /></a> 
  </div>

        );
      }
  

export default Navbarinside;

