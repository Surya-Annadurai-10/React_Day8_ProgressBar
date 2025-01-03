import { useState,useRef, useEffect } from "react";
import styles from "./ProgressBar.module.css"


const ProgressBar = ({duration,load , setLoad}) =>{
    const innerRef = useRef(null);
    const percentRef = useRef(null);
    const [counter , setCounter] = useState(0);
    useEffect(() =>{

      let interval = setInterval(() =>{
        setCounter((prev) =>{
      innerRef.current.style.width = "100%"
      if(prev == 53){
         percentRef.current.style.color="white";
      }

            if(prev < 100){
                return prev + 1;
            }else{
                clearInterval(interval);
                setLoad("Completed !")
                return 100;
            }
        })
      },duration)
return () => clearInterval(interval);

    },[duration])
 return (
    <>
    <p ref={percentRef} className={styles.percent}>{counter}%</p>
    <div ref={innerRef} className={styles.inner}></div>
    </>
 )

}

export default ProgressBar;