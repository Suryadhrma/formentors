import React from 'react';
import './login.css';
import apple from '../../assets/images/apple.png';
import google from '../../assets/images/google.png';
import logorusa from '../../assets/images/logorusa.png';
import maskot from '../../assets/images/maskot.png';
import kotakan from '../../assets/images/kotakan.jpg';

const Login = () => {
  return (
      <div className="kotakan-container">
          <img src={kotakan} alt="kotakan" className="kotakan-image" />
          <form>
              <h1>Masuk Sebagai Mentor</h1>
              <label for="email" >Email</label>
              <input type="text" placeholder="Enter your email address" />

              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password" />
              <button type="submit">Login</button>
          </form>
      </div>
  );
};

export default Login;


