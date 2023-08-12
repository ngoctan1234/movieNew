
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Student({student,delete_Student,check}){
    return (
        <div>
            <span className={student.isComplete?"active":""}>{student.name}</span><AiFillCloseCircle onClick={()=>delete_Student(student.id)} />
        </div>
    )
}