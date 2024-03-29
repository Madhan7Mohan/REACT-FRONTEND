import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  updateEmployee(employeeId, updatedEmployee) {
    return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, updatedEmployee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`);
  }

  resetSequence() {
    return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/reset-sequence`);
  }
}

export default new EmployeeService();
