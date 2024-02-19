import { getModeByLocalstorage, setMode, toggleDarkMode } from '@root/src/components/FlowbiteLayout/utils';
import { projectConfig } from '@root/src/project';
import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

export default function YusrilNavbar() {
  const [themeMode, setThemeMode] = React.useState<'dark' | 'light'>(getModeByLocalstorage());
  const isMounted = React.useRef(false); // unmounted by default

  React.useEffect(() => {
    isMounted.current = true;
    setTimeout(() => {
      if (isMounted.current) setMode(themeMode);
    }, 1000);
    return () => {
      isMounted.current = false;
    };
  });

  return (
    <Navbar fluid rounded className="fixed w-full z-20 top-0 start-0">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {projectConfig.title}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <div className="flex md:order-3">
        {/* only show when top navbar when nav_top is set in _config.json */}
        {projectConfig['nav_top'] && <Navbar.Toggle />}
        {/* <DarkThemeToggle /> */}
        <button
          aria-label="Toggle dark mode"
          type="button"
          className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={() => {
            setThemeMode(toggleDarkMode());
          }}
        >
          {themeMode == 'dark' ? <BiMoon className="h-5 w-5" /> : <BiSun className="h-5 w-5" />}
        </button>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
