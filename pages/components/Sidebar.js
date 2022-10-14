import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, ClipboardCheckIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

      {/*Twitter Logo*/}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
      </div>

      {/*Menu*/}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem  text="Home" Icon={HomeIcon} active/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Explore" Icon={HashtagIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Notifications" Icon={BellIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Messages" Icon={InboxIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Bookmarks" Icon={BookmarkIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Lists" Icon={ClipboardCheckIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="Profile" Icon={UserIcon}/>
      </div>
      <div className="">
        <SidebarMenuItem  text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>

      {/*Button*/}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-90 text-lg hidden xl:inline mt-6">Tweet</button>

      {/*Mini-profile*/}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img  className="h-10 w-10 rounded-full xl:mr-2" src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/278687635_1329318157543543_6350063287447381973_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGl5d8O1MqNsIDOf0VPGv2J0V_ps6TAM1DRX-mzpMAzUKuDzZitFbfktE5h4A3vxLBBi-pLZHfm25O1dnDpOImP&_nc_ohc=npRT1yjGYSEAX_8ykqs&_nc_zt=23&_nc_ht=scontent-los2-1.xx&oh=00_AT95MgjCFIzE36dB4mYFpaLbXmqH1v7om-AaauSl_Npk9Q&oe=634F5255" alt="user-img" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold ">Acer Graphics</h4>
          <p className="text-gray-500">@acerGraphics</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
    </div>
  );
}
