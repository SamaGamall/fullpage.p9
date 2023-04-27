import './Login.css';
import React from 'react';

const Login = () => {
  return (
    <div>
  <div className="container2">
    <form action="/action_page.php">
      <div className="row">
        <h2 style={{"-webkit-text-align":"center","text-align":"center"}}>Login with Social Media or Manually</h2>
        <div className="vl">
          <span className="vl-innertext">or</span>
        </div>
        <div className="col">
          <a href="#" className="fb btn">
            <i className="fa fa-facebook fa-fw" /> Login with Facebook
          </a>
          <a href="#" className="twitter btn">
            <i className="fa fa-twitter fa-fw" /> Login with Twitter
          </a>
          <a href="#" className="google btn">
            <i className="fa fa-google fa-fw" /> Login with Google+
          </a>
        </div>
        <div className="col">
          <div className="hide-md-lg">
            <p>Or sign in manually:</p>
          </div>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="submit" defaultValue="Login"  />
        </div>
      </div>
    </form>
  </div>
  <div className="bottom-container">
    <div className="row">
      <div className="col">
        <a href="#" style={{"color":"white"}} className="btn">Sign up</a>
      </div>
      <div className="col">
        <a href="#" style={{"color":"white"}} className="btn">Forgot password?</a>
      </div>
    </div>
  </div>
</div>
  
  );
}

export default Login;
