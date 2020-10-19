import React from 'react'


const Register = ({setRoute}) => {
    return(
        <div>
            <article class="pa4 black-80">
            <h1>Register</h1>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Name</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Surname</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="surname"  id="surname" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">ID Number</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="id-number"  id="id-number" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="password">Password</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password"  id="password" />
                </div>
                <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="password">Confirm Password</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="confirm-password"  id="confirm-password" />
                </div>
                </fieldset>
                <div class="mt3"><input onClick={()=> {}} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Register" /></div>
                <a onClick={() => setRoute('login')} href="#0" class="f6 mt3 link dim black db">Login instead?</a>
            </form>
            </article>
        </div>
    )
}



export default Register;