import UpdateUserProfile from "@/components/UpdateUserProfile/UpdateUserProfile";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UpdateUserProfile />
    </div>
  );
};

export default Page;
