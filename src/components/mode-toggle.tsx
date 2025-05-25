import { Moon, Sun } from "lucide-react"

import { Dropdown, Button, Menu } from 'antd';
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme()

  const menu = (
    <Menu>
      <Menu.Item key="light" onClick={() => setTheme("light")}>
        Light
      </Menu.Item>
      <Menu.Item key="dark" onClick={() => setTheme("dark")}>
        Dark
      </Menu.Item>
      <Menu.Item key="system" onClick={() => setTheme("system")}>
        System
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Button type="default">
        <div className="relative h-[1.2rem] w-[1.2rem]">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Dropdown>
  );
};
