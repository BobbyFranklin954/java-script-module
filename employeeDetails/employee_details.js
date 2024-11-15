const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Sarah Wilson', age: 25, department: 'Maintenance', salary: 42000 },
    { id: 5, name: 'Mike Thompson', age: 42, department: 'IT', salary: 65000 },
    { id: 6, name: 'Emma Davis', age: 31, department: 'HR', salary: 48000 },
    { id: 7, name: 'James Anderson', age: 45, department: 'Maintenance', salary: 44000 },
    { id: 8, name: 'Lisa Brown', age: 29, department: 'Finance', salary: 55000 },
    { id: 9, name: 'David Miller', age: 38, department: 'IT', salary: 62000 },
    { id: 10, name: 'Karen White', age: 33, department: 'Maintenance', salary: 43000 },
    { id: 11, name: 'Chris Taylor', age: 52, department: 'Finance', salary: 70000 },
    { id: 12, name: 'Rachel Green', age: 27, department: 'HR', salary: 46000 },
    { id: 13, name: 'Steven Clark', age: 44, department: 'Maintenance', salary: 45000 },
    { id: 14, name: 'Michelle Lee', age: 22, department: 'IT', salary: 48000 },
    { id: 15, name: 'Paul Martinez', age: 36, department: 'Finance', salary: 58000 },
    { id: 16, name: 'Jennifer Garcia', age: 32, department: 'Maintenance', salary: 44500 },
    { id: 17, name: 'Kevin Rodriguez', age: 29, department: 'IT', salary: 52000 },
    { id: 18, name: 'Laura Hall', age: 41, department: 'HR', salary: 51000 }
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}