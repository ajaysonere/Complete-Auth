import { useState } from "react";


function Login() {

   const [formdata , setFormData] = useState('');

   const changeHandler = (e)=>{
      setFormData(prev => ({...prev , [e.target.name]:e.target.value}));
   }

   const submitHandler = async(e)=>{
      e.preventDefault();
      // console.log(formdata);
      try {
        const res = await fetch('http://localhost:3800/auth/login', {
           method:'POST',
           headers:{
            'content-type': 'application/json'
           },
           body:JSON.stringify(formdata)
        });

        const result = await res.json();
        if(result.user){
           localStorage.setItem('token' , result.user);
           alert('logged in');
           window.location.href = '/home';
        }else{
          alert('Check your email and password');
        }

      } catch (error) {
        alert(`Login Failed `);
      }
   }

  return (
    <div>
        <h1>Login Form </h1>
        <form onSubmit={submitHandler}>
          <input type="email" placeholder="demo@gmail.com" name="email" onChange={changeHandler}></input><br/><br/>
          <input type="password" placeholder="*******" name="password" onChange={changeHandler}></input><br/><br/>
          <button type="submit">Login Here</button>
        </form>
    </div>
  );
}

export default Login;
