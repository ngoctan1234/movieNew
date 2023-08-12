import axios from 'axios'
import { useEffect, useState } from 'react';
function TestUseEffect(){
    const [students,setStudents]=useState([]);
    const [count,setCount]=useState(1);
    const [point,setPoint]=useState(1);
    useEffect(()=>{
        console.log("Render nha")
     },[point])
    return (
        <div>
            test useEffect
            <h1>Count: {count}</h1>
            <h1>Point: {point}</h1>
            <button onClick={()=>setCount(pre=>pre+1)}>Set count</button>
            <button onClick={()=>setPoint(pre=>pre+1)}>Set point</button>
        </div>
    )
}
export default TestUseEffect;