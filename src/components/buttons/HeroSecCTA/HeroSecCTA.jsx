import React from "react";
import "../../../index.css";
import { Button } from "@material-tailwind/react";
import Resume from "../../../assets/pdf/RESUME_Eldrich_Jyuri_Sumabat_Torcuator.pdf";

export default function HeroSecCTA() {
  return (
    <>
      <Button className=" font-alumni-sans text-lg font-bold tracking-wide border-2 border-[#e73c37] text-[#e73c37] bg-transparent hover:border-[#e73c37] hover:bg-[#e73c37] hover:text-white">
        <a href={Resume} download>
          DOWNLOAD RESUME
        </a>
      </Button>
      <Button className="font-alumni-sans text-lg font-bold tracking-wide bg-[#e73c37] border-none hover:bg-[#721815]">
        LET'S CONNECT
      </Button>
    </>
  );
}
