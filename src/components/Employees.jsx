import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";

function Employees({ searchEmp }) {
  const employees = useSelector((state) => state.employees);

  if (searchEmp?.length > 0) {
    return (
      <main className="py-6 px-6 flex flex-wrap  justify-center sm:max-[1279px]:gap-4 sm:max-[1279px]:justify-center gap-10 2xl:gap-x-16 2xl:justify-start">
        {searchEmp.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </main>
    );
  }

  return (
    <main className="py-6 px-6 flex flex-wrap   justify-center sm:max-[1279px]:gap-4 sm:max-[1279px]:justify-center gap-10 2xl:gap-x-16 2xl:justify-between">
      {/* <main className="py-6 px-6 grid grid-cols-4 gap-10 "> */}
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </main>
  );
}

export default Employees;
