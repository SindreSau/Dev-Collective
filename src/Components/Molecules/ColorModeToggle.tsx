import { useTheme } from 'next-themes';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="h-min rounded border p-1.5 transition-colors duration-300 hover:dark:bg-[#3b3949]"
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <span className="">{theme === 'light' ? <BsMoonStarsFill /> : <BsSun />}</span>
    </button>
  );
}
