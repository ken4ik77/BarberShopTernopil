import css from "./page.module.css";
import BookingForm from "@/components/BookingForm/BookingForm";

const Page = () => {
  return (
    <div className={css["page"]}>
      <BookingForm />
    </div>
  );
};

export default Page;
