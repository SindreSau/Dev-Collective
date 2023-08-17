import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Switch
        defaultSelected={theme === "light"}
        size="md"
        color="primary"
        onChange={handleThemeChange}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
    </>
  );
};

export default ThemSwitch;
