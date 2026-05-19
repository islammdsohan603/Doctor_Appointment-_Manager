import Banner from "@/components/home/Banner";
import Doctors from "@/components/home/Doctors";
import Whychoose from "@/components/home/Whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Whychoose />
      <Doctors />
    </div>
  );
}
