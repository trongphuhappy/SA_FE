import useLogout from "@/hooks/use-logout";
import { useAppSelector } from "@/hooks/use-store";
import { FaQuestionCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";

interface AvatarMenuProps {
  onCloseTooltip: () => void;
}

export default function AvatarMenu({ onCloseTooltip }: AvatarMenuProps) {
  const router = useRouter();
  const userState = useAppSelector((state) => state.userSlice);
  const { handleLogout } = useLogout();

  const handleNavigate = (index: number) => {
    switch (index) {
      case 1: {
        onCloseTooltip();
        router.push("/profile");
        break;
      }
      case 2: {
        onCloseTooltip();
        router.push("/setting-profile");
        break;
      }
      case 3: {
        onCloseTooltip();
        break;
      }
      case 5: {
        onCloseTooltip();
        handleLogout();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="z-10 bg-white right-0 rounded-lg shadow-box w-64 overflow-hidden">
      <div
        className="px-4 py-3 text-lg text-gray-900 hover:bg-gray-200 select-none cursor-pointer border-b-2"
        onClick={() => handleNavigate(1)}
      >
        <div className="font-bold">Hello</div>
        <div className="text-xs text-gray-500 truncate">
          {userState.profile?.firstName + " " + userState.profile?.lastName}
        </div>
      </div>
      <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <div
            onClick={() => handleNavigate(2)}
            className="cursor-pointer flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <div className="flex items-center">
              <IoSettingsSharp
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Setting</span>
            </div>
            <FiChevronRight className="text-gray-500" size={24} />
          </div>
        </li>
        <li>
          <div
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200 cursor-pointer"
            onClick={() => handleNavigate(3)}
          >
            <div className="flex items-center">
              <FaQuestionCircle
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Support</span>
            </div>
            <FiChevronRight className="text-gray-500" size={24} />
          </div>
        </li>
      </ul>

      <div className="py-1">
        <div
          onClick={() => handleNavigate(5)}
          className="cursor-pointer flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
        >
          <div className="flex items-center">
            <LuLogOut
              className="p-1 bg-gray-300 text-black rounded-full mr-2"
              size={30}
            />
            <span className="text-black">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
}