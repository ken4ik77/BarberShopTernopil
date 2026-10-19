import { ServiceBody } from "@/types/services";
import css from "./ServiceItem.module.css";
import Link from "next/link";

interface ServiceItemProps {
  elem: ServiceBody;
}

const ServiceItem = ({ elem }: ServiceItemProps) => {
  const serviceName = elem.name;
  const servicePrice = elem.price;
  const serviceIsActive = elem.isActive;
  const serviceId = elem._id;
  return (
    <div className={css.serviceContainer}>
      <h3 className={css.serviceName}>{serviceName}</h3>
      <p className={css.servicePrice}> {servicePrice}</p>
      <p className={css.serviceIsActive}>
        {serviceIsActive ? "Активний" : "Неактивний"}
      </p>
      <div className={css.serviceInfo}>
        <Link href={`/services/${serviceId}`} className={css.serviceInfoButton}>
          Більше інформації
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

export default ServiceItem;
