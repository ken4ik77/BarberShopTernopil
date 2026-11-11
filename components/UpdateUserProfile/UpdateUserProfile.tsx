"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import css from "./UpdateUserProfile.module.css";
import { getMe } from "@/services/auth";
import { useForm } from "react-hook-form";
import { refreshMyProfile } from "@/services/users";
import { UserUpDateBody } from "@/types/users";

interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

interface ProfileFormInputs {
  firstName: string;
  lastName: string;
  phone: string;
}

const UpdateUserProfile = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<UserProfileData>({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const { register, handleSubmit, reset } = useForm<ProfileFormInputs>();
  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
      });
    }
  }, [user, reset]);

  const mutation = useMutation({
    mutationFn: (updateData: ProfileFormInputs) =>
      refreshMyProfile(updateData as unknown as UserUpDateBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      alert("Профіль успішно оновлено!");
    },
    onError: (error) => {
      console.error(error);
      alert("Сталася помилка при збереженні даних.");
    },
  });

  const onSubmit = (data: ProfileFormInputs) => {
    mutation.mutate(data);
  };

  if (isLoading)
    return <div className={css.loading}>Завантаження профілю...</div>;
  if (isError)
    return (
      <div className={css.error}>Не вдалося завантажити дані профілю.</div>
    );

  const registrationDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <div className={css.profileContainer}>
      <h2 className={css.profileTitle}>Мій профіль</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={css.profileForm}>
        <div className={css.inputGroup}>
          <label htmlFor="firstName">Ім’я</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className={css.inputGroup}>
          <label htmlFor="lastName">Прізвище</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: true })}
          />
        </div>

        <div className={css.inputGroup}>
          <label htmlFor="phone">Телефон</label>
          <input id="phone" type="tel" {...register("phone")} />
        </div>

        <div className={`${css.inputGroup} ${css.readonly}`}>
          <label>Email (не змінюється)</label>
          <input type="email" value={user?.email || ""} readOnly disabled />
        </div>

        <div className={`${css.inputGroup} ${css.readonly}`}>
          <label>Роль</label>
          <input type="text" value={user?.role || ""} readOnly disabled />
        </div>

        <div className={`${css.inputGroup} ${css.readonly}`}>
          <label>Дата реєстрації</label>
          <input type="text" value={registrationDate} readOnly disabled />
        </div>

        <button
          type="submit"
          className={css.saveButton}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Збереження..." : "Зберегти зміни"}
        </button>
      </form>
    </div>
  );
};

export default UpdateUserProfile;
