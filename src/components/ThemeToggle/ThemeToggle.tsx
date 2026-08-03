import { FiMoon, FiSun } from "react-icons/fi";
import { IconButton } from "../UI";
import useThemeToggle from "./useThemeToggle";

export default function ThemeToggle() {
  const { label, mode, toggleMode } = useThemeToggle();

  return (
    <IconButton onClick={toggleMode} aria-label={label} title={label}>
      <FiSun
        aria-hidden="true"
        className={
          mode === "dark"
            ? "hidden h-[1.1rem] w-[1.1rem]"
            : "h-[1.1rem] w-[1.1rem]"
        }
      />
      <FiMoon
        aria-hidden="true"
        className={
          mode === "dark"
            ? "h-[1.1rem] w-[1.1rem]"
            : "hidden h-[1.1rem] w-[1.1rem]"
        }
      />
    </IconButton>
  );
}
