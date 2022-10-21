import { SparklesIcon } from "@heroicons/react/outline";
import Post from "./Post";
import Tweet from "./tweet";

export default function Feed() {
    const post = [
        {
            id: "1",
        name: "Acer Graphics",
        username: "AcerNg548",
        userImg: "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        img: "https://images.unsplash.com/photo-1605084707586-d2bdee1a7105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80",
        text: "Dignity to Life a right not a priviledge #EndSars",
        timestamp: "2 hours ago",
        },
        {
            id: "2",
        name: "Acer Graphics",
        username: "AcerNg548",
        userImg: "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        img: "https://images.unsplash.com/photo-1602572389008-d5574de7a6b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "A view of an evolution #SoroSoke",
        timestamp: "3 hours ago",
        },
    ];
  return (<div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[575px] sm:ml-[73px] flex-grow max-w-xl">
    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div classname="hoverEffect flex items-center justify-center px-0">
            <SparklesIcon className="h-5"/>
        </div>
    </div>
    <Tweet />
    {
        post.map((post)=>(
        <Post key={post.id} post={post} />))
    }
  </div>
  );
}
