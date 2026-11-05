"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./EmployeeSelector.module.css";
import { getEmployees } from "@/services/employees";

interface EmployeeSelectorProps {
  serviceId: string;
  onChange: (id: string) => void;
}

const EmployeeSelector = ({ serviceId, onChange }: EmployeeSelectorProps) => {
  const employeesList = useQuery({
    queryKey: ["employees", { serviceId }],
    queryFn: () => getEmployees({ serviceId }),
  });
  const employee = employeesList.data?.employees || [];
  return (
    <div className={css["employeeSelector"]}>
      <label htmlFor="employees">Оберіть працівника:</label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        id="employees"
        name="employeesId"
      >
        {employee.map((el) => {
          return (
            <option key={el._id} value={el._id}>
              {el.firstName} {el.lastName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default EmployeeSelector;
