import { SparklesIcon } from "@heroicons/react/outline";
import Tweet from "./tweet";

export default function Feed() {
  return (<div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[575px] sm:ml-[73px] flex-grow max-w-xl">
    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div classname="hoverEffect flex items-center justify-center px-0">
            <SparklesIcon className="h-5"/>
        </div>
    </div>
    <Tweet />
  </div>);
}
