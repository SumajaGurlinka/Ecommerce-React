import React,{useState} from 'react'
import LoginForm from './LoginForm';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const adminUser = {
    email : "admin@admin.com",
    password:"admin123"
  }
  const [user,setUser] = useState({email:""});
  const [error,setError] = useState("");

  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      navigate('/product')
      setUser({
        email: details.email,
        password: details.password
      })
    }
    else {
      setError("Details do not match")
    }
  }
  
  return (
    <div>
      
      {(user.email !== "")? (
        <div>
          
        </div>
      ) : (
        <LoginForm Login= {Login} error = {error}/>
      )}
    </div>
  )
}

export default SignIn;