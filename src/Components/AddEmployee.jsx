import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployeeById, updateEmployee } from '../Services/EmployeeService';

function AddEmployee() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    function saveEmployee(e) {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        const employee = { firstName, lastName, email };

        if (id) {
            updateEmployee(id, employee).then(() => {
                navigate('/employees');
            }).catch(error => console.log(error));
        } else {
            createEmployee(employee).then(() => {
                navigate('/employees');
            }).catch(error => console.log(error));
        }
    }

    function validate() {
        let tempErrors = { firstName: '', lastName: '', email: '' };
        let isValid = true;

        if (!firstName) {
            tempErrors.firstName = 'First Name is required';
            isValid = false;
        }
        if (!lastName) {
            tempErrors.lastName = 'Last Name is required';
            isValid = false;
        }
        if (!email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 mt-5'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input 
                                    type='text'
                                    placeholder='Enter First Name'
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input  
                                    type='text'
                                    placeholder='Enter Last Name'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input  
                                    type='email'
                                    placeholder='Enter Email'
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;
