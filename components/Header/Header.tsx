"use client";

import { useRouter } from "next/navigation";
import css from "./Header.module.css";
import { useAuthStore } from "@/stores/auth";
import { useState } from "react";
import { AxiosError } from "axios";
import { endSession } from "@/services/auth";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const clearUser = useAuthStore((s) => s.clearUser);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    setErrMessage(null);
    setIsLoading(true);

    try {
      await endSession();
      clearUser();
      router.push("/login");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const message = err.response?.data?.message || err.message || "ERROR";
      setErrMessage(message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Лого */}
        <div className={css.logoBlock}>
          <Link href="/" className={css.logo}>
            Barber<span>Shop</span>
          </Link>
        </div>
        {/* блок навігаціїї  */}
        <nav className={css.mainNavigation}>
          <ul className={css.navigationList}>
            <li>
              <Link href="/" className={css.navigationLink}>
                Головна
              </Link>
            </li>
            <li>
              <Link href="/services" className={css.navigationLink}>
                Послуги{" "}
              </Link>
            </li>
            <li>
              <Link href="/employees" className={css.navigationLink}>
                Працівники
              </Link>
            </li>
            {user?.role === "admin" && (
              <li>
                <Link
                  href="/admin"
                  className={`${css.navLink} ${css.adminLink}`}
                >
                  Admin Panel
                </Link>
              </li>
            )}
          </ul>
        </nav>
        {/* button section*/}
        <div className={css.buttonSection}>
          <Link href="/booking" className={css.bookingBtn}>
            Записатися
          </Link>

          {user ? (
            <div className={css.userSection}>
              <Link href="/profile" className={css.profileLink}>
                Вітаємо, <b>{user.firstName}</b>
              </Link>
              <button
                onClick={handleLogout}
                className={css.logoutBtn}
                disabled={isLoading}
              >
                {isLoading ? "Вихід..." : "Вийти"}
              </button>
            </div>
          ) : (
            <div className={css.guestLinks}>
              <Link href="/login" className={css.loginLink}>
                Увійти
              </Link>
              <Link href="/register" className={css.registerBtn}>
                Реєстрація
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
