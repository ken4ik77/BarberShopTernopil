"use client";

import css from "./Footer.module.css";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";

const Footer = () => {
  const user = useAuthStore((s) => s.user);

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        {/* Блок 1: Логотип, адреса та графік роботи */}
        <div className={css.section}>
          <Link href="/" className={css.logo}>
            Barber<span>Shop</span>
          </Link>
          <address className={css.addressBlock}>
            <p className={css.address}>вул. Хрещатик, 1, Київ</p>
            <div className={css.schedule}>
              <p>Пн–Пт: 09:00 – 21:00</p>
              <p>Сб–Нд: 10:00 – 19:00</p>
            </div>
          </address>
        </div>

        {/* Блок 2: Контактна інформація */}
        <div className={css.section}>
          <h3 className={css.title}>Контакти</h3>
          <ul className={css.list}>
            <li>
              <a href="tel:+380441234567" className={css.link}>
                +38 (044) 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:info@barbershop.com" className={css.link}>
                info@barbershop.com
              </a>
            </li>
          </ul>
        </div>

        {/* Блок 3: Навігаційні посилання */}
        <div className={css.section}>
          <h3 className={css.title}>Навігація</h3>
          <nav className={css.nav}>
            <ul className={css.list}>
              <li>
                <Link href="/" className={css.link}>
                  Головна
                </Link>
              </li>
              <li>
                <Link href="/services" className={css.link}>
                  Послуги
                </Link>
              </li>
              <li>
                <Link href="/" className={css.link}>
                  Працівники
                </Link>
              </li>
              {user?.role === "admin" && (
                <li>
                  <Link
                    href="/admin"
                    className={`${css.link} ${css.adminLink}`}
                  >
                    Admin Panel
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* Блок 4: Соціальні мережі */}
        <div className={css.section}>
          <h3 className={css.title}>Ми в соцмережах</h3>
          <div className={css.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialLink}
            >
              Facebook
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialLink}
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
