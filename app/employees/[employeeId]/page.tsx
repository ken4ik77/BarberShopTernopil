import css from "./page.module.css";
import { getEmployeesById } from "@/services/employees";
import Link from "next/link";

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
            <img
              width={500}
              src={res.imageUrl}
              alt={`${res.firstName} ${res.lastName}`}
              className={css.image}
            />
          ) : (
            <span className={css.noImage}>Немає фото</span>
          )}
        </div>
        <div className={css.employeeInfo}>
          <Link
            href={`/employees/${employeeId}/service`}
            className={css.serviceInfoButton}
          >
            Більше інформації про послуги працівника
            <svg
              className={css.arrowIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
