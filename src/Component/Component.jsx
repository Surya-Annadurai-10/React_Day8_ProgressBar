import { useEffect, useRef, useState } from "react";
import styles from "./Component.module.css"
import { useReducer } from "react";

const Component = () =>{
    const innerRef = useRef(null);
    const [counter , setCounter] = useState(0);
    console.log(counter);
useEffect(() =>{
  innerRef.current.style.width = "100%"
  let num = 0;

},[])

useEffect(() =>{

 
 let interval = setInterval(() =>{
  if(counter == 100){
    clearInterval(interval);
  }
    // if(num == 100){
    //   num = 100;
    // }else{
    //   num = num + 1;
    // }
    // innerRef.current.value = num;
  
  onCount();
 },1000)

 
})


const onCount = () =>{
  setCounter(counter + 1);

  
}
 return (
    <> 
    <div  className={styles.container}>
        <h1 className={styles.progress}>Progress Bar</h1>
        <div className={styles.outer}>
            <p className={styles.percent}>{counter}%</p>
            <div ref={innerRef} className={styles.inner}></div>
        </div>
        <p className={styles.load}>Loading...</p>
    </div>
    </>
 )
}
export default Component;