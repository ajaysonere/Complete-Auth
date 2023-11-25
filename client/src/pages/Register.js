import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Register() {
  const navigate  = useNavigate();

   const [formdata , setFormData] = useState('');

   const changeHandler = (e)=>{
      setFormData(prev => ({...prev , [e.target.name]:e.target.value}));
   }

   const submitHandler = async(e)=>{
      e.preventDefault();
      // console.log(formdata);
      try {
        const res = await fetch('http://localhost:3800/auth/register', {
           method:'POST',
           headers:{
            'content-type': 'application/json'
           },
           body:JSON.stringify(formdata)
        });

        const result = await res.json();
       
        if(result.status === 'ok'){
            navigate('/login')
        }
        
      } catch (error) {
        alert(`Registration Failed `);
        console.log(error);
      }
   }

  return (
    <div>
      <h1>Register Form </h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="UserName" name="username" onChange={changeHandler}></input><br/><br/>
          <input type="email" placeholder="demo@gmail.com" name="email" onChange={changeHandler}></input><br/><br/>
          <input type="password" placeholder="*******" name="password" onChange={changeHandler}></input><br/><br/>
          <button type="submit">Register Here</button>
        </form>
    </div>
  );
}

export default Register;
