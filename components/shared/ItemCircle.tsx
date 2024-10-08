import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import RippleComponenet from "./RippleComponenet";

export function ItemCircle() {
  return (
    <>
      <div className="relative flex max-lg:hidden  !z-50 w-full flex-col items-center justify-center bg-transparent ">
        <RippleComponenet />
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Image
            alt="image"
            src={"/assets/icons/image.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Image
            alt="image"
            src={"/assets/icons/stars.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={100}
          duration={20}
        >
          <Image
            alt="image"
            src={"/assets/icons/scan.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={100}
          duration={20}
          delay={80}
        >
          <Image
            alt="image"
            src={"/assets/icons/camera.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
      </div>
      <div className="relative hidden max-lg:flex  !z-50 w-full flex-col items-center justify-center bg-transparent ">
        <RippleComponenet />
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          radius={170}
          duration={20}
          reverse
        >
          <Image
            alt="image"
            src={"/assets/icons/image.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          radius={170}
          duration={20}
          delay={20}
          reverse
        >
          <Image
            alt="image"
            src={"/assets/icons/stars.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          radius={80}
          duration={20}
        >
          <Image
            alt="image"
            src={"/assets/icons/scan.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          radius={80}
          duration={20}
          delay={80}
        >
          <Image
            alt="image"
            src={"/assets/icons/camera.svg"}
            width={70}
            height={70}
          />
        </OrbitingCircles>
      </div>
    </>
  );
}
