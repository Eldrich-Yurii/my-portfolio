import React from "react";
import "../../../index.css";
import { Button } from "@material-tailwind/react";

export default function HeroSecCTA() {
  return (
      <>
        <Button className="font-alumni-sans text-lg font-bold border-2 border-[#e73c37] text-[#e73c37] bg-transparent">
          DOWNLOAD RESUME
        </Button>
        <Button className="font-alumni-sans text-lg bg-[#e73c37] border-none">
          LET'S CONNECT
        </Button>
      </>
  );
}
