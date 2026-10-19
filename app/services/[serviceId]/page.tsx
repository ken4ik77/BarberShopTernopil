import css from "./page.module.css";
import { getServiceById } from "@/services/services";
interface ServiceIdProps {
  params: Promise<{ serviceId: string }>;
}
const Page = async ({ params }: ServiceIdProps) => {
  const { serviceId } = await params;
  const res = await getServiceById(serviceId);

  return (
    <div className={css["page"]}>
      <h3 className={css.serviceName}>{res.name}</h3>
      <p className={css.serviceDescription}>{res.description}</p>
      <p className={css.serviceDurationMinutes}>{res.durationMinutes}</p>
      <p className={css.servicePrice}> {res.price}</p>
      <p className={css.serviceIsActive}>
        {res.isActive ? "Активний" : "Неактивний"}
      </p>
    </div>
  );
};

export default Page;
