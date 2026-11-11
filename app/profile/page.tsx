import css from "./page.module.css";
import MyProfile from "@/components/MyProfile/MyProfile";

const Page = () => {
  return (
    <div className={css["page"]}>
      <MyProfile />
    </div>
  );
};

export default Page;
