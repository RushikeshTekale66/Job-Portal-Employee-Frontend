import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from './API_link';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    let generateCaptcha = () => {
        const characters = '0123456789';
        const captchaLength = 4; // You can adjust the CAPTCHA length

        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters[randomIndex];
        }

        document.getElementById('captchaImage').textContent = captcha;
        const captcha2 = captcha;
    }


    function validateCaptcha() {
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
        let result = await fetch(`${URL}/employeelogin`,
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
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-lg-5 shadow p-4 bg-white rounded">
                <h2 className="text-center mb-4">Employee Login</h2>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="userCaptcha">Captcha:</label>
                    <div className="d-flex mb-2 align-items-center">
                        <input
                            className="form-control me-2"
                            type="text"
                            id="userCaptcha"
                            name="userCaptcha"
                            placeholder="Enter Captcha"
                        />
                        <span id="captchaImage" className="border px-3 py-2 rounded bg-light"></span>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-success w-100 mb-3"
                        onClick={generateCaptcha}
                    >
                        Generate Captcha
                    </button>
                </div>

                <button
                    onClick={handleLogin}
                    className="btn btn-primary w-100"
                    type="button"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}


export default Login;