import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import notFount from '../assets/images/not-found.svg'

function Error() {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={notFount} alt="not-found" />
            <h3>Ohh! Page Not Found</h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to='/'>back Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error