import { getEmployees } from "@/services/employees";
import css from "./page.module.css";
import { getService } from "@/services/services";
import Link from "next/link";
import EmployeesItem from "@/components/EmployeesList/EmployeesItem/EmployeesItem";
import ServiceItem from "@/components/ServiceList/ServiceItem/ServiceItem";

const HomePage = async () => {
  const [employeesData, serviceData] = await Promise.all([
    getEmployees({ isActive: true, perPage: 4 }),
    getService({ isActive: true, perPage: 4 }),
  ]);
  const activeEmployees = employeesData?.employees || [];
  const activeServices = serviceData?.services || [];

  return (
    <div className={css.mainContainer}>
      {/* 1. ГОЛОВНИЙ ПРОМОБЛОК */}
      <section className={css.heroSection}>
        <div className={css.heroOverlay}>
          <div className={css.heroContent}>
            <span className={css.heroTag}>Ласкаво просимо до BARBERSHOP</span>
            <h1 className={css.heroTitle}>Більше ніж просто стрижка</h1>
            <p className={css.heroSubtitle}>
              Місце, де створюється бездоганний стиль, цінується якість та панує
              чоловіча атмосфера.
            </p>
            {/* 5. КНОПКА ПЕРЕХОДУ ДО БРОНЮВАННЯ */}
            <Link href="/booking" className={css.ctaButton}>
              Забронювати візит 📅
            </Link>
          </div>
        </div>
      </section>
      {/* 2. КОРОТКА ІНФОРМАЦІЯ ПРО БАРБЕРШОП */}
      <section className={css.aboutSection}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTag}>Про нас</span>
          <h2 className={css.sectionTitle}>
            Легендарний сервіс у кожній деталі
          </h2>
        </div>
        <div className={css.aboutContent}>
          <p>
            Наш барбершоп — це простір виняткового комфорту та професіоналізму.
            Ми поєднуємо класичні традиції гоління небезпечною бритвою із
            найсучаснішими трендами стрижок. Тут ви зможете не лише оновити
            образ, а й відпочити, насолоджуючись смачною кавою чи келихом
            преміального віскі.
          </p>
          <div className={css.featuresGrid}>
            <div className={css.featureCard}>
              <h3>✂️ Топ Барбери</h3>
              <p>
                Майстри з багаторічним досвідом та ідеальним почуттям стилю.
              </p>
            </div>
            <div className={css.featureCard}>
              <h3>🧴 Преміум Догляд</h3>
              <p>Використовуємо виключно найкращу світову косметику.</p>
            </div>
            <div className={css.featureCard}>
              <h3>🎮 Зона Відпочинку</h3>
              <p>
                Зручні крісла, якісний звук та першокласні напої безкоштовно.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. БЛОК ПОПУЛЯРНИХ АБО ОСНОВНИХ ПОСЛУГ */}
      <section className={css.servicesSection}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTag}>Прайс-лист</span>
          <h2 className={css.sectionTitle}>Популярні послуги</h2>
        </div>
        <div className={css.servicesGrid}>
          {activeServices.length > 0 ? (
            activeServices.map((service) => (
              <ServiceItem key={service._id} elem={service} />
            ))
          ) : (
            <p className={css.noData}>Послуги тимчасово відсутні</p>
          )}
        </div>
      </section>
      {/* 4. БЛОК АКТИВНИХ ПРАЦІВНИКІВ */}
      <section className={css.employeesSection}>
        <div className={css.sectionHeader}>
          <span className={css.sectionTag}>Команда</span>
          <h2 className={css.sectionTitle}>Наші активні майстри</h2>
        </div>
        <div className={css.employeesGrid}>
          {activeEmployees.length > 0 ? (
            activeEmployees.map((employee) => (
              <EmployeesItem key={employee._id} elem={employee} />
            ))
          ) : (
            <p className={css.noData}>Майстри наразі недоступні</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
