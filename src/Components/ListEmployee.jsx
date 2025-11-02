import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom';
function ListEmployee() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const addNewEmployee = () => {
        navigate('/add-employee');
    }

    function updateEmployee(id) {
        navigate(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        deleteEmployee(id).then(() => {
            setEmployees(employees.filter(employee => employee.id !== id));
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First-Name</th>
                        <th>Last-Name</th>
                        <th>Email-Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button 
                                      style={{marginLeft: "10px"}} 
                                      className='btn btn-danger' 
                                      onClick={() => removeEmployee(employee.id)}
                                    >
                                      Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee;
