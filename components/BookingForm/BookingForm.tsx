"use client";
import { useState } from "react";
import ServiceSelector from "./ServiceSelector/ServiceSelector";
import css from "./BookingForm.module.css";
import EmployeeSelector from "./EmployeeSelector/EmployeeSelector";
import DateSelector from "./DateSelector/DateSelector";
import DateTimeSelector from "./DateTimeSelector/DateTimeSelector";
import ConfirmationSelector from "./ConfirmationSelector/ConfirmationSelector";

const BookingForm = () => {
  const [service, setService] = useState<string | null>(null);
  const [employee, setEmployee] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [dateTime, setDateTime] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className={css.bookingForm}>
      <h3 className={css.bookingFormMainName}> Записатися на сеанс </h3>
      <ServiceSelector onChange={setService} />
      {service && (
        <>
          <p className={css.bookingFormMainName}> Вибрати дату</p>
          <DateSelector onChange={setDate} />
        </>
      )}
      {date && service && (
        <>
          <p className={css.bookingFormMainName}> Вибрати працівника</p>
          <EmployeeSelector onChange={setEmployee} serviceId={service} />
        </>
      )}
      {service && date && employee && (
        <>
          <p className={css.bookingFormMainName}> Вибрати час Сеансу</p>
          <DateTimeSelector
            onChange={setDateTime}
            serviceId={service}
            employeeId={employee}
            date={date}
          />
        </>
      )}
      {service && date && employee && dateTime && (
        <button onClick={handleClick}>Записатися</button>
      )}
      {isOpen && (
        <ConfirmationSelector
          serviceId={service as string}
          employeeId={employee as string}
          date={date as string}
          time={dateTime as string}
        />
      )}
    </div>
  );
};

export default BookingForm;
