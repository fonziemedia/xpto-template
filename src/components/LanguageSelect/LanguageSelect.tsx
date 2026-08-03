import type { ChangeEvent } from "react";

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
  className = "control-select"
}: LanguageSelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    void onChange(event.target.value);
  };

  return (
    <>
      <label className="sr-only" htmlFor={id}>
        Language
      </label>
      <select
        id={id}
        className={className}
        value={value}
        onChange={handleChange}
      >
        <option value="pt">PT</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </>
  );
}
