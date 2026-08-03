import { FiMoon, FiSun } from "react-icons/fi";
import useThemeToggle from "./useThemeToggle";

export default function ThemeToggle() {
  const { label, toggleMode } = useThemeToggle();

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="icon-control"
    >
      <FiSun aria-hidden="true" className="theme-icon theme-icon--sun" />
      <FiMoon aria-hidden="true" className="theme-icon theme-icon--moon" />
    </button>
  );
}
