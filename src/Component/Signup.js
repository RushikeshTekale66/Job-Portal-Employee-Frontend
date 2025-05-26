import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "./API_link";


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [position, setPosition] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch(`${URL}/employeeregister`, {
            method: 'post',
            body: JSON.stringify({ name, email, mobile, position, password }),
            headers: {
                'content-Type': 'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result);
        if (result) {
            navigate('/home')
        }
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/home');
        }
    })

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-sm p-4">
                        <h2 className="mb-4 text-center">Employee Register</h2>

                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name:</label>
                            <input
                                id="nameInput"
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email:</label>
                            <input
                                id="emailInput"
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobileInput" className="form-label">Mobile:</label>
                            <input
                                id="mobileInput"
                                type="tel"
                                className="form-control"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter Mobile"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="positionInput" className="form-label">Position:</label>
                            <input
                                id="positionInput"
                                type="text"
                                className="form-control"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                placeholder="Enter Your Position"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="passwordInput" className="form-label">Password:</label>
                            <input
                                id="passwordInput"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={collectData}
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup;