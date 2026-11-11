"use client";

import { AppointmentBody } from "@/types/appointments";
import css from "./MyAppointmentsItem.module.css";
interface MyAppointmentsItemProps {
  appointments: AppointmentBody;
}
const MyAppointmentsItem = ({ appointments }: MyAppointmentsItemProps) => {
  return (
    <li className={css.appointmentItem}>
      <h4 className={css.mainH4}>{appointments.serviceId.name}</h4>
      <p className={css.mainP}>{appointments.employeeId.firstName}</p>
      <p className={css.mainP}>{appointments.startAt}</p>
      <p className={css.mainP}>{appointments.price}</p>
      <p className={css.mainP}>{appointments.status}</p>
      {appointments.comment && (
        <p className={css.mainP}>Коментар: {appointments.comment}</p>
      )}
    </li>
  );
};

export default MyAppointmentsItem;
