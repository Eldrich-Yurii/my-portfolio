import { Timeline, Typography, Avatar } from "@material-tailwind/react";
import INFOLOGO from "../../assets/informatics.webp"
import KODLOGO from "../../assets/kodego.webp"
import JJLOGO from "../../assets/johnJ.webp"

export default function Education() {
  return (
    <div className="grid place-content-center p-40 text-[#333333]">
      <h2 className="uppercase font-alumni-sans font-bold text-7xl text-center pb-32">
        educational attainment
      </h2>
      <Timeline
        className=" w-[63.8rem]"
        color="secondary"
        orientation="vertical"
      >
        <Timeline.Item>
          <Timeline.Body className="-translate-y-1.5 text-right w-[30rem]">
            <div
              color="default"
              className="uppercase font-alumni-sans font-bold"
            >
              {/* <img src={INFOLOGO} alt="" width={30} className="flex justify-self-end"/> */}
              <small className="text-lg font-medium text-[#e73c37]">college</small>
              <p className="text-2xl">informatics college manila inc. - january 2025</p>
            </div>
            <Typography
              type="small"
              className="mt-2 text-foreground font-prompt-regular"
            >
              Informatics College Manila provided the main areas of study for
              this degree include networking, databases, and software. Rather
              than concentrating on particular technologies, computer science
              degrees typically emphasize the mathematical and theoretical
              underpinnings of computing.
            </Typography>
          </Timeline.Body>
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon className="h-3 w-3" />
          </Timeline.Header>
        </Timeline.Item>
        <Timeline.Item className="grid place-self-end">
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon className="h-3 w-3" />
          </Timeline.Header>
          <Timeline.Body className="-translate-y-1.5  w-[30rem]">
            <div
              color="default"
              className="uppercase font-alumni-sans font-bold"
            >
              {/* <img src={KODLOGO} alt="" width={40}/> */}
              <small className="text-lg font-medium text-[#e73c37]">bootcamp</small>
              <p className="text-2xl">kodego - november 2023</p>
            </div>
            <Typography
              type="small"
              className="mt-2 text-foreground font-prompt-regular"
            >
              In Kodego's Full-Stack Web Development course, back-end
              development is covered with Node.js, Express, PHP, and other
              technologies, while front-end development is covered with HTML,
              CSS, and JavaScript. The emphasis is on actual projects that
              develop web application development abilities.
            </Typography>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Body className="-translate-y-1.5 text-right w-[30rem]">
            <div
              color="default"
              className="uppercase font-alumni-sans font-bold"
            >
              {/* <img src={JJLOGO} alt="" width={20} className="flex justify-self-end"/> */}
              <small className="text-lg font-medium text-[#e73c37]">seniorhigh school</small>
              <p className="text-2xl">john j. russell memorial highschool - march 2020</p>
            </div>
            <Typography
              type="small"
              className="mt-2 text-foreground font-prompt-regular"
            >
              The General Academic Strand (GAS) is a senior high school track
              designed to help pupils improve their research, communication, and
              critical thinking abilities. This program is intended for
              individuals who wish to pursue higher education in the humanities,
              social sciences, communication, or other relevant fields.
            </Typography>
          </Timeline.Body>
          <Timeline.Header>
            <Timeline.Icon className="h-3 w-3" />
          </Timeline.Header>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
