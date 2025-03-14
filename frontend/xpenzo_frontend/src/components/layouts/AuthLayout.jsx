import React from 'react'
import loginimg from "../../assets/loginImg.png";

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-18 pb-12'>
            <h3 className='text-3xl font-medium text-black'>Xpenzo </h3>
            {children}
        </div>

        <div className='hidden md:flex md:w-[80vw] h-screen'>
            <img src={loginimg} alt="" />
        </div>

    </div>
  )
}

export default AuthLayout