"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./ServiceSelector.module.css";
import { getService } from "@/services/services";

interface ServiceSelectorProps {
  onChange: (id: string) => void;
}

const ServiceSelector = ({ onChange }: ServiceSelectorProps) => {
  const serviceList = useQuery({
    queryKey: ["services"],
    queryFn: () => getService({}),
  });
  const services = serviceList.data?.services || [];
  return (
    <div className={css["serviceSelector"]}>
      <label htmlFor="services">Оберіть послугу:</label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        id="services"
        name="serviceId"
      >
        {services.map((el) => {
          return (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ServiceSelector;
