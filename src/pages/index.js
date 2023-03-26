import React,{useState} from 'react'
import styles from '../styles/sd.module.css'


 const index = () => {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let [uname,password,c]=[...formData.entries()]
    console.log(uname);
    console.log(password);
    console.log(c);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="number" name="contact" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default index