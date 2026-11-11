import MyAppointmentsList from "@/components/MyAppointmetsList/MyAppointmentsList";
import css from "./page.module.css";
import { getMyAppointmentsServer } from "@/services/serverQuery";

const Page = async () => {
  const userAppointments = await getMyAppointmentsServer();
  return (
    <div className={css["page"]}>
      <MyAppointmentsList appointments={userAppointments.appointments} />
    </div>
  );
};

export default Page;
