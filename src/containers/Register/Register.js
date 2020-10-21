import React, {useState} from 'react'




const Register = ({setRoute, setStudents, students, setCurrentUser}) => {
    const [name, setName] = useState('')
    const [surnname, setSurname] = useState('')
    const [email, setemail] = useState('')
    const [id, setId] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [homeAddress, setHomeAddress] = useState('')

    const handleRegistration = () => {
        // if all requirements(very basic) are met, route to the portal and add new user.
        // Would make a post to a live database
        if((name.length !== 0) && (surnname.length !== 0) && (password === confirmPassword) && (id !== 0) && (email !== '') && (homeAddress !== '')){
            setRoute('portal')
            setStudents(students => [...students, {
                name,
                surnname,
                id,
                email,
                password,
                homeAddress
            }])
            setCurrentUser({
                name,
                surnname,
                id,
                email,
                password,
                homeAddress
            })
        }  
    }

    return(
        <div>
            <article className="pa4 black-80 mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <h1>Register</h1>
            <div>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
                    <input onChange={(event) => setName(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Surname</label>
                    <input onChange={(event) => setSurname(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="surname"  id="surname" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input onChange={(event) => setemail(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">ID Number</label>
                    <input onChange={(event) => setId(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="id-number"  id="id-number" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Home address</label>
                    <input onChange={(event) => setHomeAddress(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="home-address"  id="home-address" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password"  id="password" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Confirm Password</label>
                    <input onChange={(event) => setConfirmPassword(event.target.value)} className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="confirm-password"  id="confirm-password" />
                </div>
                </fieldset>
                <div className="mt3"><button onClick={handleRegistration} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6">Register</button></div>
                <a onClick={() => {
                    setRoute('login')
                    }} href="#0" className="f6 mt3 link dim black db">Login instead?</a>
            </div>
            </article>
        </div>
    )
}



export default Register;