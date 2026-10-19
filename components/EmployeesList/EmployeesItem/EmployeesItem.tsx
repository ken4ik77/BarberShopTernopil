import { EmployeeBody } from "@/types/employees";
import css from "./EmployeesItem.module.css";
import Link from "next/link";

interface EmployeesItemProps {
  elem: EmployeeBody;
}

const EmployeesItem = ({ elem }: EmployeesItemProps) => {
  const employeeFirstName = elem.firstName;
  const employeeLastName = elem.lastName;
  const employeeIsActive = elem.isActive;
  const employeesImage = elem.imageUrl?.[0];
  const employeeId = elem._id;

  return (
    <div className={css.employeesContainer}>
      <h3 className={css.employeesName}>{employeeFirstName}</h3>
      <h4 className={css.employeesName}>{employeeLastName}</h4>
      <p className={css.employeeIsActive}>
        {employeeIsActive ? "Активний" : "Неактивний"}
      </p>
      <div className={css.employeeImage}>
        {employeesImage ? (
          <img
            src={employeesImage}
            alt={`${elem.firstName} ${elem.lastName}`}
            className={css.image}
          />
        ) : (
          <span className={css.noImage}>Немає фото</span>
        )}
      </div>
      <div className={css.employeeInfo}>
        <Link
          href={`/employees/${employeeId}`}
          className={css.serviceInfoButton}
        >
          Більше інформації про працівника
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
  );
};

export default EmployeesItem;
