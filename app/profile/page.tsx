import UserProfile from "@/components/UserProfile/UserProfile";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UserProfile />
    </div>
  );
};

export default Page;
