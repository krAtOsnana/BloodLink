import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
  <div className="relative h-[100vh] w-full">
    {/* Top Banner */}
    <div className="h-[20vh] w-full relative">
      <Image
        src="/vector/default-monochrome-white.svg"
        alt="Top Banner"
        layout="fill"
        objectFit="fill"
        className="z-10 p-2"
      />
    </div>

    {/* Background Image */}
    <div className="h-[80vh] relative">
      <Image
        src="/cover/bgImg.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Content on top */}
      <div className="absolute inset-0 grid grid-cols-2 bg-black/20 text-white">
        <div className="flex justify-center items-end mb-48">
          <Button className="bg-red-800 ">
            <Link href="/donor" className="text-xl">
              Donate Blood
            </Link>
          </Button>
        </div>
        <div className="flex justify-center items-end mb-48">
          <Button className="bg-red-800">
            <Link href="/recipient" className="text-xl">
              Need Blood Donation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</>


  );
}
