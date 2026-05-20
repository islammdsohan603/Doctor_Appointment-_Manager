import Banner from "@/components/home/Banner";
import Doctors from "@/components/home/Doctors";
import DoctorsLoading from "@/components/home/DoctorsLoading";
import WhatSay from "@/components/home/WhatSay";
import Whychoose from "@/components/home/Whychoose";
import { Suspense } from "react";




export default function Home() {
  return (
    <div>

      <Banner />
      <Whychoose />
      <Suspense fallback={<DoctorsLoading />}>
        <Doctors />
      </Suspense>
      <WhatSay />
    </div>
  );
}
