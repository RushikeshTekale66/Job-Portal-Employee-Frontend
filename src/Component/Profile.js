import React, { useEffect } from 'react';

const Profile = () => {
    let username = localStorage.getItem('user');
    username = JSON.parse(username);


    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card  border-0 shadow-lg rounded-4">
                        <div className="card-body p-5">
                            <h2 className="card-title text-center mb-4 fw-bold text-info">👤 Profile Overview</h2>
                            <p className="text-center fs-5 mb-4">
                                Welcome, <span className="text-warning">{username.name}!</span>
                            </p>
                            <hr className="border-secondary" />

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item ">
                                    <i className="bi bi-person-fill me-2 text-info"></i>
                                    <strong>Name:</strong> {username.name}
                                </li>
                                <li className="list-group-item ">
                                    <i className="bi bi-envelope-fill me-2 text-info"></i>
                                    <strong>Email:</strong> {username.email}
                                </li>
                                <li className="list-group-item ">
                                    <i className="bi bi-telephone-fill me-2 text-info"></i>
                                    <strong>Mobile:</strong> {username.mobile}
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-briefcase-fill me-2 text-info"></i>
                                    <strong>Position:</strong> {username.position}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;