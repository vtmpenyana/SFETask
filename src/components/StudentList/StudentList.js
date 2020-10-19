import React from 'react';
import StudentCard from '../StudentCard/StudentCard'

const StudentList = ({students}) => {
    return students.map(student =>{
        return (
            <div className='dib ma2'>
                <StudentCard name={student.name} email={student.email} surname={student.surname} id={student.id} address={student.homeAddress}/>
            </div>
        )
    })
}

export default StudentList;