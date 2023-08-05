import {Switch} from "@nextui-org/switch";
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { useTheme } from 'next-themes';

export default function ToggleSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      defaultSelected
      size='lg'
      color='gray'
      shadow={false}
      

     thumbIcon={() =>
        theme === 'light' ? (

          <button onClick={() => setTheme('dark')}>
            <MoonIcon />
          </button>
        ) : (
          <button onClick={() => setTheme('light')}>
            <SunIcon  />
          </button>
        )
      }
      ></Switch>
  );
}
