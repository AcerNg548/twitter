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
        <img  className="h-10 w-10 rounded-full xl:mr-2" src="https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="user-img" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold ">Acer Graphics</h4>
          <p className="text-gray-500">@AcerNg548</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
    </div>
  );
}
