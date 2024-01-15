import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    let generateCaptcha = ()=> {
        const characters = '0123456789';
        const captchaLength = 4; // You can adjust the CAPTCHA length

        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters[randomIndex];
        }

        document.getElementById('captchaImage').textContent = captcha;
        const captcha2= captcha;
    }


    function validateCaptcha () {
        const userCaptcha = document.getElementById('userCaptcha').value;
        const generatedCaptcha = document.getElementById('captchaImage').textContent;

        if (userCaptcha === generatedCaptcha) {
            navigate('/');
        } else {
            generateCaptcha();
            alert("Enter correct capcha") 
        }
    }

    const handleLogin = async () => {
        console.log("Email & Password are ", email, password);
        let result = await fetch('http://localhost:9000/employeelogin',
            {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'content-type': 'application/json'
                }
            });

        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            validateCaptcha();
            // navigate('/');
        }
        else { alert("Enter valid login credentials"); }
    }


    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         validateCaptcha();
    //         navigate('/');
    //     }
    // })

    return (
        <div>
            <div className='login'>
                <h2>Employee Login</h2>

                <label >Email: </label>
                <input className="inputbox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <label>Password: </label>
                <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

                <form>
                    <label for="userCaptcha">Captcha: </label>
                    <input className="inputbox" type="text" placeholder='Enter Captcha' id="userCaptcha" name="userCaptcha" />
                    <span className='capcha' id="captchaImage"></span>
                    <button style={{borderRadius: '10px', backgroundColor:'greenyellow'}} type="button" onClick={generateCaptcha}>Please generate captcha</button>
                    {/* <button type="button" onClick={validateCaptcha}>Submit</button> */}
                </form>


                <button onClick={handleLogin} className="appbutton" type="button">Submit</button>
            </div>
        </div>
    )
}


export default Login;