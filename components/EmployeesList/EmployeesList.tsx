"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./EmployeesList.module.css";
import { getEmployees } from "@/services/employees";
import EmployeesItem from "./EmployeesItem/EmployeesItem";

const EmployeesList = () => {
  const employeesList = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees({}),
  });
  const item = employeesList.data?.employees || [];
  return (
    <div className={css.employeesList}>
      <h3 className={css.employeesTitle}>Працівники</h3>
      <ul>
        {item.map((el) => {
          return (
            <li key={el._id}>
              <EmployeesItem key={el._id} elem={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeesList;
