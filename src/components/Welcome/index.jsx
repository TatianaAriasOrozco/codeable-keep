import { useRef, useState } from "react";
import style from "./styles.module.css";


function Welcome({setUsername}) {
  
  const inputRef = useRef();
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputRef.current.value);
    localStorage.setItem("username", inputRef.current.value);
  };

  return (
    <div className={style.container}>
      <h1>Welcome to Codeable Keep</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">username</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="some-user"
          ref={inputRef}
          className={style.inputUsername}
         />
        <button className={style.btnLogin} type="submit">Enter </button>
      </form>
    </div>
  );
}

export default Welcome;
