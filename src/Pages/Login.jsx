import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import Input from '../Components/UI/Input'

export default function Login() {
    const [patientId, setPatientId] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault()

        await fetch("http://localhost:8080/api/v1/auth/login/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                patientId: patientId,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("patientId").value = '';
                document.getElementById("password").value = '';

                localStorage.setItem("auth_token", body.token);
                window.location.href = "http://localhost:3001/home";
            });

    }

  return (
      <section className='form'>
          <form className="form-wrapper" onSubmit={submitHandler}>
              <div className="form__group">
                  <input
                      id={"patientId"}
                      type="text"
                      placeholder='Patient ID'
                      onChange={event => setPatientId(event.target.value)}
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
              <Link to ='/register'> Don't have an account? Create an Account</Link>
      </section>
  )
}