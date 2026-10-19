import ServiceList from "@/components/ServiceList/ServiceList";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <ServiceList />
    </div>
  );
};

export default Page;
