import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import Input from '../Components/UI/Input'

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        await fetch("http://localhost:8080/api/v1/auth/register/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("name").value = '';
                document.getElementById("password").value = '';

                setMessage(body.message);
            });

    }

  return (
      <section className='form'>
          {message}
          <form className="form-wrapper" onSubmit={submitHandler}>
              <div className="form__group">
                  <input
                      id={"name"}
                      type="text"
                      placeholder='Name'
                      onChange={event => setName(event.target.value)}
                  />
              </div>

              <div className="form__group">
                  <input
                      id={"password"}
                      type="password"
                      placeholder='Password'
                      onChange={event => setPassword(event.target.value)}
                  />
              </div>
              <button className="submit" type='submit'>Submit</button>
          </form>
              <Link to ='/login'> Already have an account?, login!</Link>
      </section>
  )
}
