import { getTypeServices } from "@/services/employees";
import css from "./page.module.css";
import ServiceList from "@/components/ServiceList/ServiceList";
interface EmployeeServiceProps {
  params: Promise<{ employeeId: string }>;
}
const Page = async ({ params }: EmployeeServiceProps) => {
  const { employeeId } = await params;
  const res = await getTypeServices(employeeId);
  const services = res?.services || [];
  return (
    <div className={css["page"]}>
      <h3 className={css.pageTitle}>Послуги, які виконує працівник</h3>
      {services.length > 0 ? (
        <ServiceList services={services} />
      ) : (
        <p className={css.noServices}>
          Цей працівник ще не має призначених послуг.
        </p>
      )}
    </div>
  );
};

export default Page;
