import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URL } from './API_link';

const UpdateJob = () => {

  const [position, setPosition] = useState('');
  const [skills, setSkills] = useState('');
  const [salary, setSalary] = useState('');
  const [company, setCompany] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [date, setDate] = useState('');
  const [applyLink, setApplyLink] = useState('');

  const params = useParams();
  const navigate = useNavigate();



  const getJobDetails = async () => {
    console.log(params);
    let result = await fetch(`${URL}/job/${params.id}`);
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
    let result = await fetch(`${URL}/job/${params.id}`, {
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
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card shadow-sm p-4">
            <h1 className="mb-4 text-center">Update Job</h1>

            <div className="mb-3">
              <label className="form-label">Job Position</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Job Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Skills</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Skills"
                value={skills}
                onChange={e => setSkills(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Description"
                value={companyDescription}
                onChange={e => setCompanyDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter Expiry Date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Apply Link</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Apply Link"
                value={applyLink}
                onChange={e => setApplyLink(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary w-100"
              onClick={updateJob}
              type="button"
            >
              Update Job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateJob;