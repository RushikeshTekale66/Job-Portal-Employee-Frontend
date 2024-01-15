import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        let result = await fetch('http://localhost:9000/jobs');
        // result = await result.json();
        result = await result.json();
        setJobs(result);
    }

    useEffect(() => {
        getJobs();
    }, [])

    const deleteJob = async (_id) => {
        var result = await fetch(`http://localhost:9000/job/${_id}`, {
            method: 'delete',
        })

        result = await result.json();
        if (result) alert("Record Deleted Successfully");
        getJobs();

    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:9000/search/${key}`);
            result = await result.json();
            if (result) {
                setJobs(result);
            }
        }
        else getJobs();
    }

    return (
        <div >
            <div className="fixed-top search-bar">
                <h1>Job List</h1>
                <input className="search-product-box" type="text" placeholder="Search product" onChange={searchHandle} />
            </div>


            <ul className="joblistheader">
                <li><strong>Sr.no</strong></li>
                <li><strong>Position</strong></li>
                <li><strong>Skills</strong></li>
                <li><strong>Salary</strong></li>
                <li><strong>Company</strong></li>
                <li><strong>Company Description</strong></li>
                <li><strong>Job Expiry</strong></li>
                <li><strong>Apply Link</strong></li>
                <li><strong>Operations</strong></li>
            </ul>
            <div className="product-list">

                <div className="joblistdata">

                    {
                        jobs.length > 0 ? jobs.map((item, index) =>
                            <ul key={item._id}>
                                <li>{index + 1}</li>
                                <li>{item.position}</li>
                                <li>{item.skills}</li>
                                <li>${item.salary}</li>
                                <li>{item.company}</li>
                                <li>{item.companyDescription}</li>
                                {/* <li>{item.date}</li> */}
                                <li>{String(new Date(item.date).getDate()).padStart(2, '0')}-
                                    {String(new Date(item.date).getMonth() + 1).padStart(2, '0')}-
                                    {new Date(item.date).getFullYear()}</li>
                                <li><Link to={item.applyLink} target="_blank" className="text-danger">Open Apply Link</Link></li>
                                <li><button className="deleteButton" onClick={() => deleteJob(item._id)}> Delete Job </button>
                                    <button className="updateButton"><Link className="linkButton" to={"/update/" + item._id}>Update Job</Link></button>
                                </li>
                            </ul>
                        )
                            : <h1>No Record Found!</h1>
                    }
                </div>
            </div>



        </div>
    )
}

export default JobList;