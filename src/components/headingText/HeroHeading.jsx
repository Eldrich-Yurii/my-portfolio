import RotatingText from "./RotatingText";

export default function HeroHeading() {
  return (
    <>
      <RotatingText
        texts={["web developer", "web designer", "learner"]}
        mainClassName="font-alumni-sans font-extrabold uppercase leading-[100%] px-2 sm:px-2 md:px-3 text-[#333333] overflow-hidden text-tracking py-0.5 sm:py-1 md:py-2 justify-center rounded-lg lg:text-[240px]"
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
