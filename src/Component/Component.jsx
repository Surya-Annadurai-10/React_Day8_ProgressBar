import { useEffect, useRef, useState } from "react";
import styles from "./Component.module.css"
import { useReducer } from "react";

const Component = () =>{
    const innerRef = useRef(null);
    // const [counter , setCounter] = useState(0);
    let num = 0;
    // console.log(width);

 useEffect(() =>{
    // setWidth(width + 1);
  setInterval(() =>{
  num = num + 1;
  if(num == 100){
    clearInterval();
  }

  console.log(num);
  
    
  },500)
 
},[])

 return (
    <> 
    <div  className={styles.container}>
        <h1 className={styles.progress}>Progress Bar</h1>
        <div className={styles.outer}>
            <p className={styles.percent}>0%</p>
            <div ref={innerRef} className={styles.inner}></div>
        </div>
        <p className={styles.load}>Loading...</p>
    </div>
    </>
 )
}
export default Component;