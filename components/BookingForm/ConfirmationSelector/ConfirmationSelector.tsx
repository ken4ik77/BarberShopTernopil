"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./ConfirmationSelector.module.css";
import { getServiceById } from "@/services/services";
import { getEmployeesById } from "@/services/employees";
import { createAppointment } from "@/services/appointments";
import { useAuthStore } from "@/stores/auth";

interface ConfirmationSelectorProps {
  serviceId: string;
  date: string;
  employeeId: string;
  time: string;
}

const ConfirmationSelector = ({
  serviceId,
  date,
  employeeId,
  time,
}: ConfirmationSelectorProps) => {
  const serviceQuery = useQuery({
    queryKey: ["service", serviceId],
    queryFn: () => getServiceById(serviceId),
  });
  const service = serviceQuery.data;
  const employeeQuery = useQuery({
    queryKey: ["employee", employeeId],
    queryFn: () => getEmployeesById(employeeId),
  });
  const employee = employeeQuery.data;
  const user = useAuthStore((s) => s.user);

  const handleClick = () => {
    const createAppointmentBody = {
      employeeId: employeeId,
      serviceId: serviceId,
      userId: user?._id,
      startAt: `${date} ${time}`,
    };
    createAppointment(createAppointmentBody);
  };
  return (
    <div className={css["confirmationSelector"]}>
      <p className={css.confirmSelector}>{service?.name}</p>
      <p className={css.confirmSelector}>{date}</p>
      <p className={css.confirmSelector}>
        {employee?.firstName}
        {employee?.lastName}
      </p>
      <p className={css.confirmSelector}>{time}</p>
      <button onClick={handleClick}> Підтвердити запис</button>
    </div>
  );
};

export default ConfirmationSelector;
