import React from 'react'
import loginimg from "../../assets/loginImg.png";
import signupimg from "../../assets/signup.png";

const AuthLayout = ({ children, pageType = "login" }) => {
    const displayImage = pageType === "signup" ? signupimg : loginimg;

  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-18 pb-12'>
            <h3 className='text-3xl font-medium text-black'>Xpenzo </h3>
            {children}
        </div>

        <div className='hidden md:flex md:w-[80vw] h-screen'>
            <img src={displayImage} alt="" />
        </div>

    </div>
  )
}

export default AuthLayout