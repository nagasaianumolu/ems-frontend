import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

// Get all employees
export const listEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

// Create employee
export const createEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

// Get employee by id (for update form)
export const getEmployeeById = (id) => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
}

// Update employee
export const updateEmployee = (id, employee) => {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}

// Delete employee
export const deleteEmployee = (id) => {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
}
