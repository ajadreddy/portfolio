import React from 'react'
import narutoImg from './narutoWhite.jpg'
const Navbar = () => {
  return (
    <>
        <div className='navbar-header'>
            {/* <div>
                <img src={narutoImg} width="150px" height="200px" alt="image" />
            </div>  */}
            <div className='navbar-header-buttons'>
               <div className='nav-btn'>Home</div>
               <div className='nav-btn'>About me</div>
               <div className='nav-btn'>Projects</div>
               <div className='nav-btn'>BTN4</div>
               <div className='nav-btn'>BTN5</div>
            </div>
        </div>
    </>
  )
}

export default Navbar