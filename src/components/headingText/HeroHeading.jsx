import RotatingText from "./RotatingText";

export default function HeroHeading() {
  return (
    <>
      <RotatingText
        texts={["junior developer", "web designer", "learner"]}
        mainClassName="font-alumni-sans font-extrabold uppercase leading-[100%] text-[#333333] overflow-hidden h-48 flex items-center leading-[100%] text-[100px] lg:justify-center rounded-lg lg:text-[210px] lg:text-tracking"
        staggerFrom={"last"}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "120%" }}
        staggerDuration={0.055}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={5000}
      />
    </>
  );
}
