import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Input from '../../components/inputs/Input.jsx'
import {validateEmail} from '../../utils/helper.js'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  //handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)){
      setError('Please enter a valid email');
      return;
    }

    if(!password && password.length < 8){
      setError('Please enter a password');
      return;
    }

    setError("");
    
    //Login API call
  }
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center mx-10 '>
        <h3 className='text-2xl font-semibold text-black mb-2'> Welcome Back</h3>
        <p className='text-m text-slate-900 mt-[5px] mb-6'> To keep connected with us <br /> please login with your professional informations</p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label='Email Address'
            type='text'
            placeholder='johndoe@gmail.com'
          />
          
          <Input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label='Password'
            type='password'
            placeholder='Min 8 characters'
          />

          {error && <p className='text-red-500 text-sm pb-2.5'>{error}</p>}

          <button type='submit' className='btn-primary'>
            Login
          </button>

          <p className='text-[14px] text-slate-900 mt-6'> 
            Don't have an account ? 
            <span onClick={()=> navigate('/signup')} className='text-blue-400 cursor-pointer'> 
              SignUp
            </span>
           </p>
        </form>
      </div>
    </AuthLayout >
  )
}

export default Login