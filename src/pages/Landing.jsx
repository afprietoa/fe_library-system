import React from 'react'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom'
import main from '../assets/images/main.svg';
const Landing = () => {
  return (
    <Wrapper>

      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>traking</span> app
            </h1>
          <p>
          Brooklyn kogi food truck meditation fashion axe roof party 
          jianbing echo park authentic readymade PBR&B hell of. Sartorial 
          bitters food truck asymmetrical, four dollar toast shabby chic 
          +1. Prism pinterest same affogato. Tilde kale chips bruh JOMO.
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Rgister</Link>
        </div>

        <img src={main} alt="job hunt" className='img main-img' />

      </div>
    </Wrapper>
  )
}

export default Landing