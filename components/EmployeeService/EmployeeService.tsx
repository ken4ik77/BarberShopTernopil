"use client";

import css from "./EmployeeService.module.css";
interface EmployeeServiceProps {
  params: Promise<{ employeeId: string }>;
}
const EmployeeService = async ({ params }: EmployeeServiceProps) => {
  const { employeeId } = await params;

  return <div className={css["employeeService"]}>EmployeeService</div>;
};

export default EmployeeService;
