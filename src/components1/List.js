import axios from 'axios'
import { useEffect, useState } from 'react';
import Student from './Student';
function List(){
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get(`https://64bc87b17b33a35a44473a5b.mockapi.io/students`)
        .then(res => {
            console.log(res)
          setStudents(res.data);
        })
        .catch(error => console.log(error));
    },[])
    console.log(students)
    return (
        <div>
            {
                students.map((item,index)=>(
                    <Student key={index} student={item} />
                ))
            }
        </div>
    )
}
export default List;