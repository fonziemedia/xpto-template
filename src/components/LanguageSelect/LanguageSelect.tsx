import type { ChangeEvent } from "react";
import { Select } from "../UI";

interface LanguageSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void | Promise<void>;
  className?: string;
}

export default function LanguageSelect({
  id,
  value,
  onChange,
  className
}: LanguageSelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    void onChange(event.target.value);
  };

  return (
    <Select
      id={id}
      label="Language"
      className={className}
      value={value}
      onChange={handleChange}
    >
      <option value="pt">PT</option>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </Select>
  );
}
