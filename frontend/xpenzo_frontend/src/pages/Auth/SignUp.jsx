import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/inputs/Input.jsx";
import { validateEmail } from "../../utils/helper.js";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //handle signup
  const handleSignUp = async (e) => {};
  return (
    <AuthLayout pageType="signup">
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center mx-10 ">
        <h3 className="text-2xl font-semibold text-black mb-2">
          {" "}
          Create an Account
        </h3>
        <p className="text-m text-slate-900 mt-[5px] mb-6">
          {" "}
          Create a great platform for managing your finances..
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage ={setProfilePic} />

          <div>
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John Doe"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            type="text"
            placeholder="johndoe@gmail.com"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            type="password"
            placeholder="Min 8 characters"
          />
          </div>
          {error && <p className='text-red-500 text-sm pb-2.5'>{error}</p>}

          <button type='submit' className='btn-primary'>
            SignUp
          </button>

          <p className='text-[14px] text-slate-900 mt-6'> 
            Alredy have an account ? 
            <span onClick={()=> navigate('/login')} className='text-blue-400 cursor-pointer'> 
              LogIn
            </span>
           </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
