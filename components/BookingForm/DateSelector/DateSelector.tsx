"use client ";
import css from "./DateSelector.module.css";
interface DateSelectorProps {
  onChange: (date: string) => void;
}

const DateSelector = ({ onChange }: DateSelectorProps) => {
  return (
    <div className={css["dateSelector"]}>
      <input
        type="date"
        name="dateSelector"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default DateSelector;
