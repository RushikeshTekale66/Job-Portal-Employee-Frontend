import React, { useState } from "react";
import { URL } from "./API_link";

const AddJob = () => {
    const [position, setPosition] = useState('');
    const [skills, setSkills] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [date, setDate] = useState('');
    const [applyLink, setApplyLink] = useState('');
    const [error, setError] = useState(false);

    const addJob = async () => {

        if (!position || !skills || !salary || !company || !companyDescription || !date || !applyLink) {
            setError(true);
            return false;
        }

        console.log(position, skills, salary, company, companyDescription, date, applyLink);
        const userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = await fetch(`${URL}/add-job`, {
            method: "post",
            body: JSON.stringify({ position, skills, salary, company, companyDescription, date, applyLink, userId }),
            headers: {
                'content-type': "application/json"
            }
        })

        result = await result.json();
        alert("Job Added Successfully");
        console.log(result);
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h1 className="mb-4 text-center">Add Job Position</h1>

                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Enter Job Position"
                            value={position} onChange={(e) => setPosition(e.target.value)} />
                        {error && !position && <div className="text-danger mt-1">Enter valid position</div>}
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Enter Salary Range"
                            value={salary} onChange={(e) => setSalary(e.target.value)} />
                        {error && !salary && <div className="text-danger mt-1">Enter valid salary</div>}
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Enter Job Skills"
                            value={skills} onChange={(e) => setSkills(e.target.value)} />
                        {error && !skills && <div className="text-danger mt-1">Enter valid skills</div>}
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Enter the Company"
                            value={company} onChange={(e) => setCompany(e.target.value)} />
                        {error && !company && <div className="text-danger mt-1">Enter Company Name</div>}
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Enter Company Description"
                            value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} />
                        {error && !companyDescription && <div className="text-danger mt-1">Enter valid company description</div>}
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="date" placeholder="Last Date to Apply"
                            value={date} onChange={(e) => setDate(e.target.value)} />
                        {error && !date && <div className="text-danger mt-1">Enter valid expiry</div>}
                    </div>

                    <div className="mb-4">
                        <input className="form-control" type="text" placeholder="Job Link"
                            value={applyLink} onChange={(e) => setApplyLink(e.target.value)} />
                        {error && !applyLink && <div className="text-danger mt-1">Enter valid Link</div>}
                    </div>

                    <div className="text-center">
                        <button onClick={addJob} className="btn btn-primary px-4">Add Job</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddJob;