"use client";
import css from "./MyProfile.module.css";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/auth";
import Link from "next/link";

const MyProfile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMe(),
  });
  console.log(data);

  if (isLoading) {
    return <div className={css.myProfile}>Завантаження профілю...</div>;
  }

  if (isError) {
    return <div className={css.myProfile}>Не вдалося завантажити дані.</div>;
  }

  const firstName = data?.user.firstName || "Не вказано";
  const lastName = data?.user.lastName || "Не вказано";
  const userEmail = data?.user.email || "Не вказано";
  const userPhone = data?.user.phone || "Не вказано";
  const addUserAt = data?.user.createdAt
    ? new Date(data.user.createdAt).toLocaleDateString("uk-UA")
    : "Не вказано";
  return (
    <div className={css["myProfile"]}>
      <h3 className={css.myProfileTitle}>Мій профіль:</h3>
      <p className={css.myProfileText}>Ім’я: {firstName}</p>
      <p className={css.myProfileText}>Прізвище: {lastName}</p>
      <p className={css.myProfileText}>Email: {userEmail}</p>
      <p className={css.myProfileText}>Телефон: {userPhone}</p>
      <p className={css.myProfileText}>Дата реєстрації: {addUserAt}</p>
      <div className={css.profileUpdate}>
        <Link href={`/profile/updateProfile`} className={css.serviceInfoButton}>
          Редагувати свій профіль
          <svg
            className={css.arrowIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className={css.profileUpdate}>
        <Link href={`/profile/appointments`} className={css.serviceInfoButton}>
          Мої записи:
          <svg
            className={css.arrowIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
