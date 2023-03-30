import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Heater = () => {
     const [Mobile, setMobile] = useState(false);

  return (
    <>
        <header>
            <div className='container'>
                <h1>   test</h1>
                <nav className='flexSB'>
                    <ul className={Mobile ? "navMenu-list" : 'flexSB'} onClick={() => setMobile(false)}>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/series'>About</Link>
                        <Link className='link' to='/movies'>Movies</Link>
                        <Link className='link' to='/pages'>Pages</Link>
                        <Link className='link' to='/register'>Register</Link>
                        <Link className='link' to='/login'>Login</Link>
                    </ul>
                </nav>
            </div>
        </header>   
    </>
  )
}

export default Heater