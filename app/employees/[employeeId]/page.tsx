import Image from "next/image";
import css from "./page.module.css";
import { getEmployeesById } from "@/services/employees";

interface EmployeeIdProps {
  params: Promise<{ employeeId: string }>;
}
const Page = async ({ params }: EmployeeIdProps) => {
  const { employeeId } = await params;
  const res = await getEmployeesById(employeeId);
  return (
    <div className={css["page"]}>
      <div className={css.employeesContainer}>
        <h3 className={css.employeesName}>{res.firstName}</h3>
        <h4 className={css.employeesName}>{res.lastName}</h4>
        <p className={css.employeeDescription}>{res.description}</p>
        <p className={css.employeePhone}>{res.phone}</p>
        <p className={css.employeeEmail}>{res.email}</p>
        <p className={css.employeeIsActive}>
          {res.isActive ? "Активний" : "Неактивний"}
        </p>
        <div className={css.employeeImage}>
          {res.imageUrl ? (
            <Image
              src={res.imageUrl}
              alt={`${res.firstName} ${res.lastName}`}
              className={css.image}
            />
          ) : (
            <span className={css.noImage}>Немає фото</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
