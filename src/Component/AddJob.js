import React, { useState } from "react";

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

        if(!position || !skills || !salary || !company || !companyDescription || !date || !applyLink) {
            setError(true);
            return false;
        }

        console.log(position, skills, salary, company, companyDescription, date, applyLink);
        const userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = await fetch('http://localhost:9000/add-job', {
            method:"post",
            body: JSON.stringify({position, skills, salary, company, companyDescription, date, applyLink, userId}),
            headers:{
                'content-type':"application/json"
            }
        })

        result = await result.json();
        alert("Job Added Successfully");
        console.log(result);
    }

    return (
        <div className="product">
            <h1>Add Job Position</h1>
            <input className="inputbox" type="text" placeholder="Enter Job position" value={position} onChange={(e) => { setPosition(e.target.value) }} />
            {error && !position && <span className="invalid-input">Enter valid position</span>}

            <input className="inputbox" type="text" placeholder="Enter Salary Range" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
            {error && !salary && <span className="invalid-input">Enter valid salary</span>}

            <input className="inputbox" type="text" placeholder="Enter Job Skills" value={skills} onChange={(e) => { setSkills(e.target.value) }} />
            {error && !skills && <span className="invalid-input">Enter valid skills</span>}

            <input className="inputbox" type="text" placeholder="Enter the Company" value={company} onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className="invalid-input">Enter Company Name</span>}

            <input className="inputbox" type="text" placeholder="Enter Company Description" value={companyDescription} onChange={(e) => { setCompanyDescription(e.target.value) }} />
            {error && !companyDescription && <span className="invalid-input">Enter valid company description</span>}

            <input className="inputbox" type="date"  placeholder="Last Date to Apply"  value={date} onChange={(e) => { setDate(e.target.value) }} />
            {error && !date && <span className="invalid-input">Enter valid expiry</span>}

            <input className="inputbox" type="text" placeholder="Job Link" value={applyLink} onChange={(e) => { setApplyLink(e.target.value) }} />
            {error && !applyLink && <span className="invalid-input">Enter valid Link</span>}

            <button onClick={addJob} className="appbutton">Add Job</button>

            </div>
    )
}

export default AddJob;