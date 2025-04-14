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
import LOGO from "../../assets/yuri-logo.png";
import Resume from "../../assets/pdf/RESUME_Eldrich_Jyuri_Sumabat_Torcuator.pdf";

const LINKS = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Skills",
    href: "/#skills",
  },
  {
    title: "Projects",
    href: "/#projects",
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
            className="flex items-center gap-x-2 p-1 hover:text-[#e73c37] font-prompt-semibold text-[#333333] text-[16px]"
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
    <Navbar className="sticky top-0 shadow-none border-none z-20">
      <div>
        <div className="flex px-[1rem] justify-between items-center w-full lg:h-16 lg:px-[7rem]">
          <div className="inline-flex items-center">
            <img src={LOGO} alt="logo" width={50} />
            <Typography
              as="a"
              href="/"
              type="small"
              className="ml-2 mr-2 block py-1 text-3xl font-alumni-sans font-bold text-[#E73C37]"
            >
              YURI
            </Typography>
          </div>
          {/* <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" /> */}
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden lg:block">
            <Button className=" font-alumni-sans text-lg font-bold tracking-wide border-2 border-[#e73c37] text-[#e73c37] bg-transparent hover:border-[#e73c37] hover:bg-[#e73c37] hover:text-white">
              <a href={Resume} download>
                DOWNLOAD RESUME
              </a>
            </Button>
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
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button isFullWidth size="sm" className="font-alumni-sans text-lg font-bold tracking-wide border-2 border-[#e73c37] bg-transparent text-[#e73c37] mt-4">
          <a href={Resume} download>
            DOWNLOAD RESUME
          </a>
        </Button>
      </Collapse>
    </Navbar>
  );
}
