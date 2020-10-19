import React from 'react'
import StudentList from '../StudentList/StudentList'

const Portal = ({students}) => {
    return(
        <div>
            <StudentList students={students} />
        </div>
    )
}

export default Portal