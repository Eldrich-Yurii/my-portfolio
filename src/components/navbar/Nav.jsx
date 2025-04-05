import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import LOGO from "../../assets/yuri-logo.png"

const LINKS = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Skills",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary font-alumni-sans font-bold text-[#333333] text-[18px]"
          >
            {/* <Icon className="h-4 w-4" /> */}
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 shadow-none border-none">
      <div>
        <div className="flex justify-between items-center w-full lg:h-16 lg:px-[4.5rem]">
          <div className="inline-flex items-center">
              <img src={LOGO} alt="logo" width={60}/>
            <Typography
              as="a"
              href="#"
              type="small"
              className="ml-2 mr-2 block py-1 text-lg font-player text-[#E73C37]"
            >
              YURI
            </Typography>
          </div>
          {/* <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" /> */}
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div>
            <Button className="hidden border-none bg-[#E73C37] lg:inline-block font-player text-[10px] leading-[100%] -tracking-[2%] px-[18px] py-4 rounded-[8px]">
              DOWNLOAD RESUME
            </Button>
          </div>
        </div>
        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <IoClose className="h-4 w-4" />
          ) : (
            <TbMenu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList/>
        <Button isFullWidth size="sm" className="mt-4">
          DOWNLOAD RESUME
        </Button>
      </Collapse>
    </Navbar>
  );
}
