import { useEffect, useRef, useState } from "react";
import styles from "./Component.module.css"
import { useReducer } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const Component = () =>{
  const [load , setLoad] = useState("Loading...");



 return (
    <> 
    <div  className={styles.container}>
        <h1 className={styles.progress}>Progress Bar</h1>
        <div className={styles.outer}>
            <ProgressBar load = {load} setLoad={setLoad} duration={100} />
        </div>
        <p className={styles.load}>{load}</p>
    </div>
    </>
 )
}
export default Component;