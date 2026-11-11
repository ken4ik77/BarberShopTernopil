"use client";
import MyAppointmentsItem from "./MyAppointmentsItem/MyAppointmentsItem";
import css from "./MyAppointmentsList.module.css";
import { AppointmentBody } from "@/types/appointments";
interface MyAppointmentsListProps {
  appointments: AppointmentBody[];
}
const MyAppointmentsList = ({ appointments }: MyAppointmentsListProps) => {
  console.log(appointments);
  return (
    <ul className={css.MyAppointmentsList}>
      {appointments.map((el) => {
        return <MyAppointmentsItem appointments={el} key={el._id} />;
      })}
    </ul>
  );
};
export default MyAppointmentsList;
