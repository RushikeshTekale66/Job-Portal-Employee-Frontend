import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateJob = () => {

    const [position, setPosition] = useState('');
    const [skills, setSkills] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [date, setDate] = useState('');
    const  [applyLink, setApplyLink] = useState('');

  const params = useParams();
  const navigate = useNavigate();



  const getJobDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:9000/job/${params.id}`);
    result = await result.json();
    setPosition(result.position);
    setSkills(result.skills);
    setSalary(result.salary);
    setCompany(result.company);
    setCompanyDescription(result.companyDescription);
    setDate(result.date);
    setApplyLink(result.applyLink);

  }

  useEffect(() => {
    getJobDetails();
  }, [])

  const updateJob = async () => {
    console.log(position, skills, salary, company, companyDescription, date, applyLink);
    let result = await fetch(`http://localhost:9000/job/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ position, skills, salary, company, companyDescription, date, applyLink }),
      headers: {
        'content-type': 'application/json'
      }
    })
    result = await result.json();
    navigate('/');
    console.log(result);
  }



  return (
    <div className="product">
      <h1>Update Job </h1>
      <input className="inputbox" type="text" placeholder="Enter Job Position" value={position} onChange={(e) => { setPosition(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter Skills" value={skills} onChange={(e) => { setSkills(e.target.value) }} />

      <input className="inputbox" type="Number" placeholder="Enter Salary" value={salary} onChange={(e) => { setSalary(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter product company" value={company} onChange={(e) => { setCompany(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter company Description" value={companyDescription} onChange={(e) => { setCompanyDescription(e.target.value) }} />

      <input className="inputbox" type="date" placeholder="Enter Expiry date" value={date} onChange={(e) => { setDate(e.target.value) }} />

      <input className="inputbox" type="text" placeholder="Enter Apply Link" value={applyLink} onChange={(e) => { setApplyLink(e.target.value) }} />

      <button onClick={updateJob} className="appbutton">Update Job</button>
    </div>
  )
}

export default UpdateJob;