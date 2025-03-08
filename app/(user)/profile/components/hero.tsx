"use client";

import AvatarProfile from "@/components/avatar-profile";
import UpdateCoverPhoto from "@/components/update-cover-photo";
import { NavBars } from "@/const/profile";
import useToast from "@/hooks/use-toast";
import { useAppSelector } from "@/hooks/use-store";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  nav: number;
  setNav: (index: number) => void;
}

export default function Hero({ nav, setNav }: HeroProps) {
  const router = useRouter();
  const profileState = useAppSelector((state) => state.userProfileslice);
  const { addToast } = useToast();

  const handleSetNav = (index: number) => {
    setNav(index);
  };

  const renderNav = () => {
    return NavBars?.map((item, index) => {
      return (
        <button key={index} type="button" onClick={() => handleSetNav(index)}>
          <div
            className={`h-[45px] px-4 rounded-md flex items-center mb-1 ${
              nav === index && "bg-[#00939f]"
            }`}
          >
            <span
              className={`text-[15px] ${
                nav === index ? "text-white" : "text-black"
              }`}
            >
              {item.name}
            </span>
          </div>
          {index === nav && (
            <div className="w-full h-[3px] rounded-lg bg-[#00939f]"></div>
          )}
        </button>
      );
    });
  };

  return (
    <div>
      <div className="bg-gray-100 pt-5">
        <div className="xl:relative max-w-[1425px] h-[530px] mx-auto overflow-hidden">
          <div className="absolute w-full">
            <UpdateCoverPhoto />
            <div className="absolute -bottom-[40%] h-full translate-y-1/2 transform w-full pl-[3%] pr-[3%] flex justify-between items-baseline z-30">
              <div className="w-full">
                <div className="flex flex-col md:flex-row items-center gap-x-4 pb-3 border-b">
                  <AvatarProfile />
                  <div className="w-full flex flex-col md:flex-row justify-between">
                  
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {profileState.profile?.firstName +
                          " " +
                          profileState.profile?.lastName}
                      </h2>
                      <p className="mt-1 text-base text-gray-600">
                        520 followers
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pt-1 flex items-baseline">{renderNav()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}