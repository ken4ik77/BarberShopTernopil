import EmployeesList from "@/components/EmployeesList/EmployeesList";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <EmployeesList />
    </div>
  );
};

export default Page;
