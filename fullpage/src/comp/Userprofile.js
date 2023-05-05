import { Link, NavLink  } from "react-router-dom";
import './Userprofile.css';
import React from 'react';

const Userprofile = () => {
  return (
    <div className="container2"  >
  <div className="main-body"  >
    
    <div className="row gutters-sm" >
      <div className="col-md-4 mb-3">
        <div className="card1-1">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} style={{"padding-top":"1.2rem"}}/>
              <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
              
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Kenneth Valdez
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                fip@jukmuh.al
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                (239) 816-9029
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                (320) 380-4539
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Bay Area, San Francisco, CA
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Blood type </h6>
              </div>
              <div className="col-sm-9 text-secondary">
                AB
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <Link className="btn5  " to="/editep">Edit</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                <small>Web Design</small>
                <div className="progress mb-3" style={{"height":"5px"}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{"width":"80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
          
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Userprofile;
