import { useState } from "react";

export default function FormAdd({addStudent}){
    const [name,setName]=useState("")
    const Handle_add =(e)=>{
        e.preventDefault();
        addStudent(name)
        setName("")
    }
    return (
        <form onSubmit={Handle_add}>
            <input type="text" placeholder="Nhập Họ Tên" value={name} onChange={(e)=>setName(e.target.value)} />
        </form>
    )
}