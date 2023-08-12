import { useState } from "react"
import Student from "./Student"
import FormAdd from "./FormAdd"
export default function Students(){
    const [list,setList]=useState([
        {
            id:1,
            name:"Lê Gia Bảo",
            isComplete:false
        },
        {
            id:2,
            name:"Hoàng Thiên Nam",
            isComplete:false,
        },
        {
            id:3,
            name:"Hoàng Thiên Mèo",
            isComplete:true
        }
     ])
     const addStudent=(name)=>{
        setList([...list,{name:name,id:4,isComplete:false}])
     }
     const delete_Student=(id)=>{
        setList(list.filter(item=>item.id !=id))
     }
    return(
        <div>
              <FormAdd addStudent={addStudent} />
              {
                list.map((item,index)=>(
                    <Student key={index} student={item}  delete_Student={delete_Student}/>
                  ))
              }
        </div>
    )
}