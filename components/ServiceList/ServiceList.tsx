"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./ServiceList.module.css";
import { getService } from "@/services/services";
import ServiceItem from "./ServiceItem/ServiceItem";
import { ServiceBody } from "@/types/services";

interface ServiceListProps {
  services?: ServiceBody[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  const serviceList = useQuery({
    queryKey: ["services"],
    queryFn: () => getService({}),
    enabled: !services,
  });
  const item = services || serviceList.data?.services || [];
  return (
    <div className={css.serviceList}>
      <h2 className={css.serviceTitle}>Список послуг</h2>
      <ul>
        {item.map((el) => {
          return (
            <li key={el._id}>
              <ServiceItem elem={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceList;
