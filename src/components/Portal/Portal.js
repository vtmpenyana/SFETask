import React from 'react'
import StudentList from '../StudentList/StudentList'
import './Portal.css'

const Portal = ({students, setRoute}) => {
    return(
        <div className='tc ma5'>
            <div className='logoutBtn'>
                <h5 onClick={() => setRoute('home')} className='f6 link dim br1 ba bw2 ph3 pv2 mb2 dib dark-pink pointer'>logout</h5>
            </div>
            <StudentList students={students} />
        </div>
    )
}

export default Portal