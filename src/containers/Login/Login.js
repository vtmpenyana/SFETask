import React, {useState}from 'react'


const Login = ({setRoute, setStudents, students}) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div>
            <article class="pa4 black-80 mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <h1>Login</h1>
            <form action="sign-up_submit" accept-charset="utf-8">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="password">Password</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div class="mt3">
                <input onClick={()=> {}} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Login" />
                </div>
                <a onClick={() => setRoute('register')} href="#0" class="f6 mt3 link dim black db">Register</a>
            </form>
            </article>
        </div>
    )
}



export default Login;