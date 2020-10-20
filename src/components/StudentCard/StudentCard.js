import React from 'react';
import './StudentCard.css'
import Tilt from 'react-tilt'


const StudentCard = ({name, surname, email, id, address}) => {
    return(
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
            <article id="card" className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 Tilt-inner">
                    <div className="tc">                
                        <img src={`https://avatars.dicebear.com/api/avataaars/${surname + id}.svg`} class="br-100 h4 w4 dib ba b--black-05 pa2" alt='registered student' title="Photo of a student" /> 
                        <h1 class="f3 mb2">{name}</h1>
                        <h2 class="f5 fw4 gray mt0">{email}</h2>
                        <h2 class="f5 fw4 gray mt0">{id}</h2>
                        <h2 class="f5 fw4 gray mt0">{address}</h2>
                    </div>
            </article>
        </Tilt>
    )
}

export default StudentCard;