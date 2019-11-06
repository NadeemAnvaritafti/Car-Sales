import React from "react";
import {Link} from 'react-router-dom';

export default function WelcomePage() {
    return (
      <section>
        <header>
          <h1 className='mainHeading'>Select a Car</h1>
          <div className='imageDiv'>
            <img
              src="https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg"
              alt="mustang"
            />
          </div>
        </header>
        <div>
          <Link to='/car'>
            <button className='mustangBtn'>2019 Ford Mustang</button>
          </Link>
        </div>
      </section>
    );
  }