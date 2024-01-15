import React, { useEffect } from 'react';

const Profile = () => {
    let username = localStorage.getItem('user');
    username = JSON.parse(username);


    return (
        <div>
            <div className='profile'>
                <h1>Your Profile</h1>
                <p>Welcome, <b className='text-primary'>{username.name} !</b> </p>
                <div className='profile-detail'>
                    <p>Name : <b>{username.name}</b></p>
                    <p>Email : <b>{username.email}</b></p>
                    <p>Mobile: <b>{username.mobile}</b></p>
                    <p>Position: <b>{username.position}</b></p>
                </div>

            </div>

        </div>
    )
}

export default Profile;