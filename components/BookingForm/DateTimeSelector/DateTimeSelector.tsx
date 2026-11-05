"use client";
import { getAppointmentAvailability } from "@/services/appointments";
import css from "./DateTimeSelector.module.css";
import { useQuery } from "@tanstack/react-query";

interface DateTimeSelectorProps {
  onChange: (date: string) => void;
  employeeId: string;
  serviceId: string;
  date: string;
}
const DateTimeSelector = ({
  onChange,
  employeeId,
  serviceId,
  date,
}: DateTimeSelectorProps) => {
  const slotsResult = useQuery({
    queryKey: ["availability", { serviceId, employeeId, date }],
    queryFn: () => getAppointmentAvailability({ serviceId, employeeId, date }),
  });
  const slot = slotsResult.data?.slots || [];
  return (
    <div className={css["dateTimeSelector"]}>
      <label htmlFor="availability">Оберіть час:</label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        id="availability"
        name="dateTime"
      >
        {slot.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DateTimeSelector;
