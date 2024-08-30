import Link from "next/link";
const EmployeeList = ({ api }) => {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4" >
        {api?.map((employee, index) => (
          <div key={employee.id} className="bg-color-primary custom-shadow p-4 rounded-lg" >
            <Link href={`/employe/${employee.id}`} className="cursor-pointer text-color-accent text-color-accent text-2xl font-bold"
        key={index}>{employee.employee_name} </Link>
            <p>Salary: {employee.employee_salary}</p>
            <p>Age: {employee.employee_age}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default EmployeeList;
  