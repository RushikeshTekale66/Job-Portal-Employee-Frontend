import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "./API_link";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        let result = await fetch(`${URL}/jobs`);
        // result = await result.json();
        result = await result.json();
        setJobs(result);
    }

    useEffect(() => {
        getJobs();
    }, [])

    const deleteJob = async (_id) => {
        var result = await fetch(`${URL}/job/${_id}`, {
            method: 'delete',
        })

        result = await result.json();
        if (result) alert("Record Deleted Successfully");
        getJobs();

    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`${URL}/search/${key}`);
            result = await result.json();
            if (result) {
                setJobs(result);
            }
        }
        else getJobs();
    }

    return (
        <div className="container-fluid p-0">
            {/* Fixed search bar */}
            <div className="bg-light border-bottom py-3 px-4 shadow-sm">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h2 className="mb-2 mb-md-0">Job List</h2>
                    <input
                        className="form-control w-90 w-md-50"
                        type="text"
                        placeholder="Search job"
                        onChange={searchHandle}
                    />
                </div>
            </div>

            <div className="pt-5 mt-2 px-3">
                {jobs.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Skills</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Expiry</th>
                                    <th scope="col">Apply</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((item, index) => (
                                    <tr key={item._id} >
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.position}</td>
                                        <td>{item.skills}</td>
                                        <td>${item.salary}</td>
                                        <td>{item.company}</td>
                                        <td className="text-truncate" style={{ maxWidth: '150px' }} title={item.companyDescription}>
                                            {item.companyDescription}
                                        </td>
                                        <td>
                                            {String(new Date(item.date).getDate()).padStart(2, '0')}-
                                            {String(new Date(item.date).getMonth() + 1).padStart(2, '0')}-
                                            {new Date(item.date).getFullYear()}
                                        </td>
                                        <td>
                                            <a href={item.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                                                Open Link
                                            </a>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm me-2"
                                                onClick={() => deleteJob(item._id)}
                                                title="Delete Job"
                                            >
                                                Delete
                                            </button>
                                            <Link to={`/update/${item._id}`} className="btn btn-warning btn-sm" title="Update Job">
                                                Update
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h4 className="text-center text-muted mt-5">No Records Found!</h4>
                )}
            </div>
        </div>
    )
}

export default JobList;