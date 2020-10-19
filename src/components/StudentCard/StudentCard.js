import React from 'react';
import './StudentCard.css'

const StudentCard = ({name, surname, email, id, address}) => {
    return(
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
                <img src={`https://avatars.dicebear.com/api/avataaars/${surname + id}.svg`} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a student" /> 
                <h1 class="f3 mb2">{name}</h1>
                <h2 class="f5 fw4 gray mt0">{email}</h2>
                <h2 class="f5 fw4 gray mt0">{id}</h2>
                <h2 class="f5 fw4 gray mt0">{address}</h2>
            </div>
        </article>
    )
}

export default StudentCard;