import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import profile from "../../assets/images/profile.png";
import MyDropdown from "./Dropdown/Dropdown";
import NotificationComponent from "./NotificationComponent/NotificationComponent";
import RightSidebar from "./RightSidebar/RightSidebar";
import icons from "./icons";

interface Props {
  textCss: string;
}

const ProfileOnHeader = ({ textCss }: Props) => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const handleChange = () => {};
  const items = [
    {
      id: 1,
      name: <span className="font-bold">Profile</span>,
      icon: <CgProfile className="text-xl" />,
      handleChange: handleChange
    },
    {
      id: 2,
      name: <span className="font-bold">Log out</span>,
      icon: <MdOutlineLogout className="text-xl" />,
      handleChange: handleChange
    }
  ];

  return (
    <div className="flex gap-4 items-center">
      <RightSidebar
        childClass={"px-0"}
        isBtn={false}
        title={"Notifications"}
        rightSidebarOpen={rightSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      >
        <NotificationComponent />
      </RightSidebar>

      <Bell setRightSidebarOpen={setRightSidebarOpen} />
      <div className=" flex items-center gap-3">
        <div className="w-12">
          <MyDropdown
            btnText={<img className="w-full" src={profile} alt="profile" />}
            items={items}
          />
        </div>
        <div className={`${textCss} whitespace-nowrap`}>
          <p className="text-gray-500 font-light leading-tight">Hello</p>
          <p className="font-semibold leading-tight">Deniz Warren</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileOnHeader;

export const Bell = ({ setRightSidebarOpen, isNotifiy = false }) => {
  return (
    <div
      onClick={() => setRightSidebarOpen(true)}
      className="relative w-6 cursor-pointer"
    >
      <img src={icons.notification} alt="notification" />
      {isNotifiy && (
        <span className="w-[10px] h-[10px] absolute top-0 right-0  bg-orange-500 rounded-full"></span>
      )}
    </div>
  );
};
