import React from "react";

const About = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <h1 className="mb-4 text-center">About</h1>
                    <p>
                        This is a simple <strong>React.js</strong> application that uses technologies like
                        <strong> React.js, Node.js, Express.js & MongoDB</strong>.
                    </p>
                    <p>
                        We have created a database that stores job information. Employers first need to register themselves,
                        then log in, and afterwards they can perform various operations.
                    </p>
                    <p>
                        This application includes a job backend database management system. You can <strong>add</strong>, <strong>update</strong>,
                        and <strong>delete</strong> jobs — i.e., perform all CRUD operations. It also includes a
                        <strong> search feature</strong> to find jobs/content in the database.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;